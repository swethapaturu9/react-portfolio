terraform {
    required_providers {
        aws = {
            version = ">=4.9.0"
            source = "hashicorp/aws"
        }
    }
}

provider "aws" {
  region     = "us-east-1"
  access_key = var.access_key
  secret_key = var.secret_key
}
