# ArBa Development Studio Full Stack Developer Assignment

This repository contains a Full Stack Developer assignment solution for ArBa Development Studio. The assignment involves building a backend API using Express.js, TypeScript, and Mongoose for a fictional e-commerce platform. Additionally, there is a frontend application built using Next.js 14 and TypeScript to interact with the backend API.

## Deployments
- Frontend :: https://arba-assignment-beta.vercel.app
- Backend :: https://arba-assignment-cxzg.onrender.com

## Note
- Both Frontend and Backend is Deployed on free deployment sites, backend maybe take less than 1 min to start working.

## Backend API

The backend API provides the following routes:

### Authentication Routes

- `/api/auth/login`: POST - User login.
- `/api/auth/register`: POST - User registration.
- `/api/auth/forgot-password`: POST - Request to reset password via email OTP.

### User Routes

- `/api/users/update-fullName`: POST - Update user profile (fullName).
- `/api/users/update-avatar`: POST - Update user profile (avatar).
- `/api/users/change-password`: POST - Change user password.

### Category Routes

- `/api/categories/create`: POST - Create a new category.
- `/api/categories/update`: PATCH - Update a category.
- `/api/categories/delete?id=`: DELETE - Delete a category.
- `/api/categories?id=`: GET - Get details of a specific category.
- `/api/categories`: GET - Get a list of all categories.

### Product Routes

- `/api/products/create`: POST - Create a new product.
- `/api/products/update`: PATCH - Update a product.
- `/api/products/delete`: DELETE - Delete one or more products.
- `/api/products?id`: GET - Get details of a specific product.
- `/api/products/user-prod?sort=asc|desc&category=`: GET - Get a list of products. Supports filtering by category and sorting by price.

### Additional Features

- OTP Service using Nodemailer
- Photo Bucket using Cloudinary
- Error Handling Middleware for Development

## Frontend Application

The frontend application built with Next.js 14 and TypeScript provides a user interface to interact with the backend API. It includes pages for user authentication, profile management, category management, product management, and shopping functionalities.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the backend directory (`/backend`) and run `yarn` to install dependencies.
3. Run `yarn dev` to start the backend server.
4. Navigate to the frontend directory (`/frontend`) and run `npm install` to install dependencies.
5. Run `yarn dev` to start the frontend server.
6. Open your browser and navigate to `http://localhost:3000` to view the frontend application.
