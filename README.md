# Portfolio Website

## Overview

This repository contains the source code for my personal portfolio website. The website is built with React, showcasing my projects, skills, and professional journey. It's deployed as a static website on AWS S3, ensuring high performance and reliability. The project incorporates a Continuous Integration/Continuous Deployment (CI/CD) pipeline, facilitating automatic linting of code on pull requests and direct deployment to S3 on successful merge to the master branch.

## Features

- **React Framework**: The site is built with React, offering a dynamic and responsive user experience.
- **AWS S3 Hosting**: The website is hosted on Amazon S3, known for its scalability and reliability.
- **CI/CD Pipeline**: The project utilizes GitHub Actions for Continuous Integration and Continuous Deployment.
  - **Linting**: Ensures code quality by automatically linting code on every pull request to the master branch.
  - **Deployment**: Automatically deploys the website to AWS S3 upon successful merge to the master branch.

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

## CI/CD Pipeline Details

### Continuous Integration (CI)

- **Linting**: Ensures that your code follows best practices and standards. Any pull request or push to the master branch triggers the linting process.

### Continuous Deployment (CD)

- **Deployment to AWS S3**: Upon a successful merge to the master branch, the code is built and deployed to AWS S3, making your latest changes immediately live.
