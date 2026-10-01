# 🔐 Better Auth — Learning Notes

This README contains my notes and understanding of **Better Auth** while learning authentication in a Next.js application.

---

# What is Authentication?

Authentication is how a website makes sure you are who you say you are.

## Why authentication matter in web application

- Protects User Data
- Prevents Unauthorized Access
- Enable Personalization
- Maintains Data Integrity
- Supports access control
- Builds User trust

## Types of Authentication

- Password Based
- Multi Factor Authentication (MFA)
- Token Based
- Session Based
- OAuth (Third Party Authentication) - (Google Sign up)
- Biometric (Finger-print, face)
- Password-less authentication
- API key

# Route Groups

Route Groups are a folder convention that let you organize routes by category or team.

A route group can be created by wrapping a folder's name in parenthesis: (folderName).

---

## 📚 What is Better Auth?

**Better Auth** is an authentication library for JavaScript/TypeScript applications.

It helps us implement features such as:

- 👤 User registration

- 🔑 Login

- 🚪 Logout

- 🔒 Session management

- 🍪 Authentication cookies

- 🛡️ Protected routes

- 🗄️ Database integration

Instead of building authentication completely from scratch, Better Auth provides the core authentication functionality for us.

---

# 🏗️ Authentication Architecture

A typical Better Auth setup has two important sides:

```text
                Next.js Application
                       │
            ┌──────────┴──────────┐
            │                     │
        Server Side           Client Side
            │                     │
      Better Auth Instance   Auth Client
            │                     │
            └──────────┬──────────┘
                       │
                    Database
```

### Server

The server contains the main **Better Auth instance**.

It is responsible for things like:

- Creating users
- Checking credentials
- Creating sessions
- Managing authentication logic
- Communicating with the database

### Client

The client uses the **auth client** to communicate with the authentication system.

For example:

```ts
import { signUp } from "@/lib/auth-client";
```

Then we can call:

```ts
await signUp.email({
  name,
  email,
  password,
});
```

---

# ⚙️ Auth Instance

The **Auth Instance** is the central configuration of Better Auth.

For example:

```ts
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: ...,
});
```

Think of it as:

```text
Better Auth Instance
        │
        ├── Authentication configuration
        ├── Database connection
        ├── Session configuration
        ├── User management
        └── Auth-related logic
```

The Auth Instance normally belongs on the **server** because it can contain sensitive configuration and database access.

---

# 🖥️ Auth Client

The client is used from the frontend to interact with Better Auth.

Example:

```ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();
```

Then authentication functions can be exposed:

```ts
export const { signIn, signUp, signOut, useSession } = authClient;
```

Example:

```ts
await signUp.email({
  name: "Mahenaj",
  email: "example@gmail.com",
  password: "1234567Aa",
});
```

---

# 📝 Signup Flow

A basic signup flow looks like this:

```text
User fills form
      ↓
Submit form
      ↓
preventDefault()
      ↓
Read FormData
      ↓
Extract name/email/password
      ↓
Call signUp
      ↓
Better Auth
      ↓
Database
      ↓
User created
```

Example:

```ts
const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  await signUp.email({
    name: String(name),
    email: String(email),
    password: String(password),
  });
};
```

---

# 🛑 Why `preventDefault()`?

Normally, submitting an HTML form causes the browser to reload/navigate.

```ts
e.preventDefault();
```

stops that default browser behavior.

So instead of:

```text
Submit
 ↓
Browser reloads
```

we get:

```text
Submit
 ↓
JavaScript handles the form
 ↓
Better Auth signup
```

---

# 📦 FormData

`FormData` is a browser API for collecting form values.

Example:

```ts
const formData = new FormData(e.currentTarget);
```

Suppose the form contains:

```text
name     → Mahenaj
email    → mahenaj.dev@gmail.com
password → 1234567Aa
```

Then:

```ts
formData.get("name");
```

returns:

```text
"Mahenaj"
```

and:

```ts
formData.get("email");
```

returns:

```text
"mahenaj.dev@gmail.com"
```

and:

```ts
formData.get("password");
```

returns:

```text
"1234567Aa"
```

---

# 🔍 `formData.entries()`

`entries()` gives us an iterator containing the form's **key-value pairs**.

Example:

```ts
formData.entries();
```

represents data like:

```text
["name", "Mahenaj"]
["email", "mahenaj.dev@gmail.com"]
["password", "1234567Aa"]
```

These values aren't automatically displayed on the page.

They are simply the data stored inside the `FormData` object.

We can inspect them with:

```ts
console.log([...formData.entries()]);
```

---

# 🧩 Form Field Names

For `FormData` to find an input, the input needs a `name`.

Example:

```tsx
<Input name="name" />
<Input name="email" />
<Input name="password" type="password" />
```

Then:

```ts
formData.get("name");
formData.get("email");
formData.get("password");
```

can retrieve the corresponding values.

Think of it like:

```text
name="email"
      ↓
     key
      ↓
"mahenaj.dev@gmail.com"
      ↓
    value
```

---

# 🔄 Client → Auth → Database

The complete concept can be visualized like this:

```text
┌─────────────────┐
│   Signup Form   │
└────────┬────────┘
         │
         │ FormData
         ↓
┌─────────────────┐
│   Auth Client   │
└────────┬────────┘
         │
         │ signUp.email()
         ↓
┌─────────────────┐
│ Better Auth     │
│ Auth Instance   │
└────────┬────────┘
         │
         │ Database operation
         ↓
┌─────────────────┐
│    Database     │
└─────────────────┘
```

This separation is important because the frontend should not directly handle sensitive database operations.

---

# 🔐 Authentication vs Authorization

These two concepts are related but different.

### Authentication

**"Who are you?"**

Example:

```text
User logs in
     ↓
Credentials checked
     ↓
User identified
```

### Authorization

**"What are you allowed to do?"**

Example:

```text
User → Admin
        ↓
Can access admin dashboard
```

So:

```text
Authentication = Identity
Authorization  = Permissions
```

---

# 🍪 Sessions

After authentication, the application needs to know that the user is logged in.

This is where **sessions** come in.

Conceptually:

```text
Login
  ↓
Authentication successful
  ↓
Session created
  ↓
Browser receives authentication information
  ↓
Future requests can identify the user
```

A session allows the application to maintain the user's authenticated state across requests.

---

# 🛡️ Protected Routes

Authentication becomes especially useful when we want to protect pages.

For example:

```text
/dashboard
/settings
/profile
/admin
```

A protected page can require the user to have a valid session.

Conceptually:

```text
Request /dashboard
        ↓
Is user authenticated?
     ↙       ↘
   YES        NO
    ↓          ↓
Dashboard    Redirect
```

---

# 🌐 Next.js App Router

In Next.js App Router, API endpoints are commonly placed inside:

```text
app/api
```

For example:

```text
app/
└── api/
    └── auth/
        └── [...all]/
            └── route.ts
```

The route handler connects Next.js requests with the Better Auth server configuration.

---

# 🧠 Important Concepts Learned

### 1. Auth Instance

The server-side Better Auth configuration.

```ts
const auth = betterAuth({...});
```

### 2. Auth Client

The client-side interface for calling authentication actions.

```ts
const authClient = createAuthClient();
```

### 3. `signUp`

Used to create a new account.

```ts
await signUp.email({
  name,
  email,
  password,
});
```

### 4. `FormData`

Used to collect form values.

```ts
const formData = new FormData(e.currentTarget);
```

### 5. `formData.get()`

Retrieves a value using its field name.

```ts
formData.get("email");
```

### 6. `formData.entries()`

Provides all key-value pairs.

```ts
[...formData.entries()];
```

### 7. `preventDefault()`

Stops the browser's default form submission behavior.

```ts
e.preventDefault();
```

### 8. Authentication

Determines **who the user is**.

### 9. Authorization

Determines **what the user can access**.

### 10. Sessions

Maintain the authenticated state of a user.

---

# 💡 Mental Model

The most important mental model I learned is:

```text
                 USER
                  │
                  ↓
               FORM
                  │
                  ↓
             FormData
                  │
                  ↓
             Auth Client
                  │
                  ↓
          Better Auth Instance
                  │
                  ↓
              Database
                  │
                  ↓
              SESSION
                  │
                  ↓
         Authenticated User
```

The frontend **collects information**.

The authentication system **processes authentication**.

The database **stores user-related data**.

The session **keeps track of the authenticated user**.

---

## 🏁 Final Takeaway

Better Auth removes much of the complexity of building authentication manually.

The core idea is:

> **The client starts the authentication action, the server-side Auth Instance handles the authentication logic, and the database stores the necessary user/session data.**
