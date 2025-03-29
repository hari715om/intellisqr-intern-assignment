Project Overview
This is the backend of the Full-Stack Intern Assignment, built using Node.js, Express.js, and Prisma. It provides API endpoints for authentication and user management.

Tech Stack
Node.js – Backend runtime

Express.js – API framework

Prisma – Database ORM

MongoDB – Database

TypeScript – Type safety

dotenv – Environment variable management

Setup Instructions

Install Dependencies

npm install

Setup Environment Variables
Create a .env file inside backend and add:

env

PORT=5000
DATABASE_URL="mongodb+srv://your_mongodb_connection"
JWT_SECRET="your_secret_key"

Run Database Migrations


npx prisma migrate dev

Start the Server

npm run dev
The API will run on http://localhost:5000/api.

Project Structure

backend
│── prisma/
│   ├── schema.prisma         # Database schema
│── src/
│   ├── config/               # Database configuration
│   ├── controllers/          # API logic
│   ├── middlewares/          # Error handling & authentication
│   ├── routes/               # API routes
│   ├── server.ts             # Main server file
│── .env                      # Environment variables
│── package.json              # Dependencies & scripts
│── tsconfig.json             # TypeScript configuration

API Endpoints
Method	Endpoint	Description
POST	/api/auth/login	User login
POST	/api/auth/register	User registration

Summary
Frontend runs on http://localhost:5173

Backend runs on http://localhost:5000

API is connected to MongoDB using Prisma