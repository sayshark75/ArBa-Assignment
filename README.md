# ArBa Development Studio Full Stack Developer Assignment

This repository contains a Full Stack Developer assignment solution for ArBa Development Studio. The assignment involves building a backend API using Express.js, TypeScript, and Mongoose for a fictional e-commerce platform. Additionally, there is a frontend application built using Next.js 14 and TypeScript to interact with the backend API.

## Backend API

The backend API provides the following routes:

### Authentication Routes

- `/api/auth/login`: POST - User login.
- `/api/auth/register`: POST - User registration.
- `/api/auth/forgot-password`: POST - Request to reset password via email OTP.

### User Routes

- `/api/users/update-profile`: POST - Update user profile (fullName, avatar).
- `/api/users/change-password`: POST - Change user password.

### Category Routes

- `/api/categories/create`: POST - Create a new category.
- `/api/categories/update/:categoryId`: PUT - Update a category.
- `/api/categories/delete/:categoryId`: DELETE - Delete a category.
- `/api/categories/:categoryId`: GET - Get details of a specific category.
- `/api/categories`: GET - Get a list of all categories.

### Product Routes

- `/api/products/create`: POST - Create a new product.
- `/api/products/update/:productId`: PUT - Update a product.
- `/api/products/delete`: DELETE - Delete one or more products.
- `/api/products/:productId`: GET - Get details of a specific product.
- `/api/products`: GET - Get a list of products. Supports filtering by category and sorting by price.

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
