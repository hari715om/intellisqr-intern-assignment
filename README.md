**IntelliSQR Intern Assignment**

This is a full-stack web application built for the IntelliSQR Full-Stack Intern Assignment. It consists of:

A React + TypeScript frontend that follows a provided Figma design.

A Node.js + Express + Prisma backend that manages authentication with a simple user schema.

This README provides setup instructions, a tech stack overview, and how to run the project locally.

📌 Tech Stack
Frontend:
React.js (TypeScript) – Component-based UI
React Hook Form – Form handling & validation
Zod – Schema validation
React Query – API calls & caching
Tailwind CSS – Styling

Backend:
Node.js + Express – Server-side logic
Prisma ORM – Database management
PostgreSQL / MongoDB – Database
bcrypt.js – Password hashing
jsonwebtoken (JWT) – Authentication


Frontend Setup
Navigate to the frontend folder
cd frontend

Install dependencies
npm install

Start the frontend server
npm run dev
The React app should now be running on http://localhost:5173

Backend Setup
Navigate to the backend folder

cd ../backend
Install dependencies
npm install

Configure Environment Variables
Create a .env file inside the backend folder and add:

DATABASE_URL=""
JWT_SECRET="your_secret_key"
PORT=5000
Set up Prisma (for database migrations)

npx prisma migrate dev --name init
Start the backend server

npm run dev
The backend should now be running on http://localhost:5000 

API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
GET	/api/auth/me	Get logged-in user details
