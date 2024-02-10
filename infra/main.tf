resource "aws_dynamodb_table" "visitor_count" {
  name           = "PageVisitors"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "PageID"

  attribute {
    name = "PageID"
    type = "S"
  }
}

resource "aws_iam_role" "lambda_execution_role" {
  name = "lambda_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy" "lambda_dynamodb_access" {
  name = "lambda_dynamodb_access"
  role = aws_iam_role.lambda_execution_role.id
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Action" : [
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents"
          ],
          "Resource" : "arn:aws:logs:*:*:*",
          "Effect" : "Allow"
        },
        {
          "Effect" : "Allow",
          "Action" : [
            "dynamodb:*"
          ],
          "Resource" : "arn:aws:dynamodb:*:*:table/PageVisitors"
        },
      ]
  })
}


resource "aws_lambda_function" "visitor_counter" {
  function_name = "visitorCounter"
  handler       = "func.lambda_handler"
  runtime       = "python3.8"
  role          = aws_iam_role.lambda_execution_role.arn
  filename         = "../serverless/lambda_function.zip"
  source_code_hash = filebase64sha256("../serverless/lambda_function.zip")
}


resource "aws_lambda_function_url" "lambda_url" {
  function_name      = "visitorCounter"
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = ["*"]
    allow_methods     = ["*"]
    allow_headers     = ["date", "keep-alive"]
    expose_headers    = ["keep-alive", "date"]
    max_age           = 86400
  }
}
