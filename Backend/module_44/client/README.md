# CRUD: User Management — Client

A responsive user management application built with **Next.js, React, and TypeScript**. It connects to an Express.js and MongoDB backend to manage user records through CRUD operations.

## 🌐 Live Demo

- **Live Website:** https://crud-operation-client-side.vercel.app
- **Backend API:** https://crud-operation-backend-api.vercel.app

## ✨ Features

- View all users
- View individual user details
- Create new users
- Update existing user information
- Delete users
- Responsive user interface
- REST API integration
- Dark UI with lime-green accents

## 🛠️ Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Express.js
- MongoDB

## 🎨 Color Palette: Design direction — Obsidian + Acid Lime

The project uses a dark green and lime-green color scheme.

| Color           | Hex Code  | Usage                          |
| --------------- | --------- | ------------------------------ |
| Deep Background | `#101210` | Main page background           |
| Card Background | `#1B1F1B` | Cards and panels               |
| Dark Green      | `#24351C` | Decorative backgrounds         |
| Lime Green      | `#B9F65B` | Primary accents and highlights |
| Soft Lime       | `#D2FFA0` | Highlighted text               |
| Primary Text    | `#F2F4EC` | Headings and body text         |
| Muted Text      | `#A0A79A` | Secondary text                 |
| Border          | `#30372C` | Card and section borders       |
| Subtle Text     | `#687263` | Footer labels                  |

### CSS Variables

```css
:root {
  --background: #101210;
  --card: #1b1f1b;
  --surface-green: #24351c;
  --accent: #b9f65b;
  --accent-soft: #d2ffa0;
  --foreground: #f2f4ec;
  --muted-foreground: #a0a79a;
  --border: #30372c;
}
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mahenaj-tabassum/Programming_Hero/tree/main/Backend/module_44/
```

### 2. Navigate to the client directory

```bash
cd client
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the client root directory.

**For local development:**

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**For production:**

```env
NEXT_PUBLIC_API_URL=https://crud-operation-backend-api.vercel.app
```

Use the base URL without `/users`, because the application appends the endpoint path when making requests.

> **Security:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never store database credentials, private keys, or other secrets in them.

### 5. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🔗 API Endpoints

### Production API

Base URL: `https://crud-operation-backend-api.vercel.app`

| Method | Endpoint                                                  | Description           |
| ------ | --------------------------------------------------------- | --------------------- |
| GET    | `https://crud-operation-backend-api.vercel.app/users`     | Retrieve all users    |
| GET    | `https://crud-operation-backend-api.vercel.app/users/:id` | Retrieve a user by ID |
| POST   | `https://crud-operation-backend-api.vercel.app/users`     | Create a user         |
| PATCH  | `https://crud-operation-backend-api.vercel.app/users/:id` | Update a user         |
| DELETE | `https://crud-operation-backend-api.vercel.app/users/:id` | Delete a user         |

Replace `:id` with the actual MongoDB user ID.

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

## 🚢 Deployment

The client application is deployed on Vercel.

**Deployment URL:** https://crud-operation-client-side.vercel.app/

## 🔐 Security

- Never commit `.env` files to GitHub.
- Do not expose private credentials in client-side environment variables.
- Validate user input on the backend.
- Configure CORS to allow your intended frontend origins.

## 👨‍💻 Author

Created as a learning project to practice frontend development, REST API integration, and full-stack CRUD operations.
