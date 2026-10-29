# CRUD Operation: User Management API

A RESTful backend API for managing users, built with **Node.js, Express.js, and MongoDB**. This API supports creating, retrieving, updating, and deleting user records.

## 🚀 Live API

**Production Base URL:**  
https://crud-operation-backend-api.vercel.app

**Local Base URL:**  
http://localhost:5000

## ✨ Features

- Retrieve all users
- Retrieve a single user by ID
- Create a new user
- Update existing user information
- Delete a user
- Store user data in MongoDB
- Support JSON request and response bodies

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- dotenv
- CORS


## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/mahenaj-tabassum/Programming_Hero/tree/main/Backend/module_44/
```

### 2. Navigate to the backend directory

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the backend root directory:

```env
PORT=5000
MONGODB_DATABASE_URL=YOUR_MONGODB_CONNECTION_STRING
```

Replace `YOUR_MONGODB_CONNECTION_STRING` with your actual MongoDB connection string.

**Security:** Never commit your `.env` file or expose your database credentials publicly.

### 5. Start the server

Use the start script configured in your `package.json`. For example:

```bash
npm start
```

If your project uses a development script, you can run:

```bash
npm run dev
```

Your local API should be available at:

http://localhost:5000

## 🔗 API Endpoints

The API supports the following CRUD operations.

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| GET    | `/users`     | Retrieve all users    |
| GET    | `/users/:id` | Retrieve a user by ID |
| POST   | `/users`     | Create a new user     |
| PATCH  | `/users/:id` | Update a user by ID   |
| DELETE | `/users/:id` | Delete a user by ID   |

### Local API URLs

| Method | URL                               |
| ------ | --------------------------------- |
| GET    | `http://localhost:5000/users`     |
| GET    | `http://localhost:5000/users/:id` |
| POST   | `http://localhost:5000/users`     |
| PATCH  | `http://localhost:5000/users/:id` |
| DELETE | `http://localhost:5000/users/:id` |

### Production API URLs

| Method | URL                                                       |
| ------ | --------------------------------------------------------- |
| GET    | `https://crud-operation-backend-api.vercel.app/users`     |
| GET    | `https://crud-operation-backend-api.vercel.app/users/:id` |
| POST   | `https://crud-operation-backend-api.vercel.app/users`     |
| PATCH  | `https://crud-operation-backend-api.vercel.app/users/:id` |
| DELETE | `https://crud-operation-backend-api.vercel.app/users/:id` |

**Note:** Replace `:id` with an actual MongoDB user ID. These production endpoints assume the deployed API exposes the same routes as the local backend.

## 📝 Request Body Examples

For `POST` and `PATCH` requests, select **Body → raw → JSON** in Postman.

### Create a User — POST

```json
{
  "name": "Ayesha Rahman",
  "email": "ayesha@example.com",
  "role": "customer"
}
```

Endpoint:

```text
POST /users
```

### Update a User — PATCH

Send the fields you want to update. For example:

```json
{
  "city": "NewYork"
}
```

Endpoint:

```text
PATCH /users/:id
```

Your backend must support partial updates for this example to work.

## 🧪 Testing the API

You can test the endpoints using:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) for VS Code
- Your frontend application
- A browser for GET requests

For POST, PATCH, and DELETE requests, use an API testing tool or your frontend.

## 🌐 Frontend Integration

Configure your frontend API base URL using an environment variable.

For local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

For production:

```env
NEXT_PUBLIC_API_URL=https://crud-operation-backend-api.vercel.app
```

Restart your local development server after changing environment variables. For production, update the environment variable in your hosting provider and rebuild or redeploy the frontend as required.

## 🔒 Security Notes

- Keep database credentials in environment variables.
- Do not commit `.env` files to GitHub.
- Configure CORS to allow your intended frontend origin.
- Validate user input on the server.
- Handle invalid MongoDB IDs and missing users appropriately.

## 👨‍💻 Author

Created as a backend CRUD project for learning and practicing REST API development with Node.js, Express.js, and MongoDB.
