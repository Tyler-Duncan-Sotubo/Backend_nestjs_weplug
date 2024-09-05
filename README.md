# Music Distribution Backend API (NestJS)

This repository contains the **NestJS** backend application for the **Music Distribution Platform**. This API handles music and video uploads to an **AWS S3 bucket** and integrates with the frontend built using **Next.js**. It also manages artist profiles, and file processing, and provides endpoints for the music distribution website.

## Features

- **File Upload to AWS S3**: Supports uploading music and video files to AWS S3 for distribution.
- **Authentication**: Secure endpoints, using **JWT** authentication with role-based access control (admin, artist).
- **Support Ticket Management**: Backend handling of support tickets created by users on the frontend.
- **Email Integration**: Sends email notifications via **SendGrid** for music upload

## Technologies Used

- **NestJS**: Framework for building efficient and scalable server-side applications.
- **TypeScript**: For type safety and scalability.
- **AWS SDK**: For uploading files to S3.
- **Prisma ORM**: Database management (PostgreSQL or another relational database).
- **JWT**: JSON Web Tokens for authentication and authorization.
- **SendGrid**: Email integration for notifications and account management.
- **Railway**: Deployment platform for Node.js backend services.

## Prerequisites

Before running the project, ensure you have the following:

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **PostgreSQL** (or any supported relational database)
- **AWS S3** bucket and credentials
- **SendGrid** account and API key
- **Railway** account for deployment

