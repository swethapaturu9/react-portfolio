terraform {
  backend "s3" {
    bucket         = "viewcounter-terraformstate"
    key            = "./terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock" 
    encrypt        = true 
  }
}