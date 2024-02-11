# Portfolio Website - Cloud Resume Challenge
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS%20Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white)
[![View My Portfolio](https://img.shields.io/badge/View%20Portfolio-blue?style=for-the-badge)](http://swecsye6225.me)


## Overview

This repository contains the source code for my attempt at the cloud resume challenge by Forrest Brazeal. 
The website is built with React, showcasing my professional journey. It's deployed as a static website on AWS S3 and distributed globally through Amazon CloudFront, enhancing security and performance with a content delivery network(CDN). 
The website also features a view counter, which is powered by an AWS Lambda function triggered on each visit, incrementing a count in an Amazon DynamoDB table, thus providing real-time visitor analytics. 
The website is fully CI/CD integrated, ensuring that both the frontend and infrastructure code are automatically built, tested, and deployed through a robust pipeline upon each commit


## Architecture Diagram

![Architecture](https://github.com/swethapaturu9/react-portfolio/blob/master/cloud-resume.drawio.png)



## Features

- **React Framework**: The site is built with React, offering a dynamic and responsive user experience.
- **AWS S3 Hosting**: The website is hosted on Amazon S3, known for its scalability and reliability.
- **Amazon CloudFront**: Content is distributed through CloudFront, enhancing the site's security and load times globally.
- **View Counter**:  Features a visitor count functionality implemented with AWS Lambda and DynamoDB to track and display the number of site visits in real-time.
- **CI/CD Pipeline**: The project utilizes GitHub Actions for Continuous Integration and Continuous Deployment.
  - **Linting**: Ensures code quality by automatically linting code on every pull request to the master branch.
  - **Terraform Validate**: Includes a validation step for Terraform configurations, ensuring that infrastructure changes are vetted for syntax and logical errors before being applied.
  - **Deployment**: 
    - **Frontend Deployment**: On a successful merge to the master branch, the static site content is automatically deployed to AWS S3.
    - **Infrastructure as Code Deployment**: Terraform changes are automatically applied to manage and update the AWS infrastructure
   
      
## Requirements for S3 Deployment

To deploy the website to AWS S3, ensure you meet the following requirements:

1. **AWS Account**: An active AWS account is required.
2. **S3 Bucket**: An S3 bucket for hosting the website. The bucket should have public access and be configured for static website hosting.
3. **IAM User**: An IAM user with programmatic access and permissions to put objects in the S3 bucket.
4. **AWS CLI**: The AWS Command Line Interface should be installed and configured on the machine that runs the deployment.
5. **Environment Variables**: The following environment variables must be set in your CI/CD pipeline settings:
    - `AWS_ACCESS_KEY_ID`: The access key for your IAM user.
    - `AWS_SECRET_ACCESS_KEY`: The secret access key for your IAM user.
    - `AWS_REGION`: The region where your S3 bucket is hosted.
    - `S3_BUCKET`: The name of your S3 bucket.

## Local Development

To set up this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd your-repo-name
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```
