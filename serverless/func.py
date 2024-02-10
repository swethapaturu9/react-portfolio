
import boto3
import json

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('PageVisitors')


    cors_headers = {
        'Access-Control-Allow-Origin': 'https://swecsye6225.me', 
        'Access-Control-Allow-Methods': 'GET',  
        'Access-Control-Allow-Headers': 'Content-Type',  
        'Access-Control-Allow-Credentials': 'true'  
    }

    try:
   
        response = table.get_item(Key={'PageID': 'mainPage'})
        
     
        if 'Item' in response and 'VisitorCount' in response['Item']:
            current_count = int(response['Item']['VisitorCount'])
        else:
            current_count = 0  # Default to 0 if not found
        
       
        new_count = current_count + 1

        table.put_item(Item={
            'PageID': 'mainPage',
            'VisitorCount': new_count
        })

        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({
                'message': 'Visitor count updated successfully for the main page.',
                'newVisitorCount': new_count
            })
        }
    except Exception as e:
        print(e)
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'message': 'Error updating visitor count for the main page'})
        }



