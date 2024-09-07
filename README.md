```markdown
# User Registration and Login Microservice

This project is a User Registration and Login Microservice built with Node.js (Express.js) and MongoDB. It follows RESTful principles and can be hosted on any platform like AWS, Firebase, Vercel, Supabase, etc.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (cloud)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Iamvivek-gupta/UserManagementService
   cd UserManagementService
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
    PORT = 8555
    JWT_SECRET = !@#$%^&*()__)(*&^%$#$%^&*()(*&^))
    MONGO_URI = mongodb+srv://vivek:codex123@cluster0.a1rol.mongodb.net/user-management?retryWrites=true&w=majority
   ```

4. Start the server:

   ```bash
   npm start
   ```

 - The server will start at http://localhost:8555/ by default.


  

### API Endpoints

#### Register User

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "email": "vivek@gmail.com",
    "username": "vivek",
    "password_hash": "vivek1234"
    }
  ```
- **Response:**
  ```json
  {
    "msg": "User registered successfully"
  }
  ```

#### Login User

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Logs in a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "vivek@gail.com",
    "password_hash": "vivek1234"
    }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

#### Get User Profile

- **URL:** `/profile`
- **Method:** `GET`
- **Description:** Returns user details. Accessible only to authenticated users.
- **Headers:**
  ```json
  {
    "x-auth-token": "your_jwt_token"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "66dbf9f58c53610d9be244d2",
    "email": "vivek@gail.com",
    "username": "vivek"
    }
  ```

### Hosting

I have deployed these microservices on render.

