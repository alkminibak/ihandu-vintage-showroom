# I Hand U — Curated Vintage Collection

A full-stack digital showroom for a curated vintage clothing collection.

The application allows visitors to browse products and view product details, registered users to maintain a personal wishlist, and administrators to create, edit, and delete products through a protected admin dashboard.

This project was developed as the final project for **Coding Factory 10 (Athens University of Economics and Business)**.

## Features

- Browse the complete vintage collection
- View individual product details
- User registration and login
- JWT-based authentication
- Role-based authorization (`user` / `admin`)
- Personal wishlist for authenticated users
- Protected admin dashboard
- Create, update and delete products as an administrator
- REST API with layered backend architecture
- API documentation with Swagger UI
- Form validation on both frontend and backend
- Responsive user interface

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Zod

### Backend

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Swagger / OpenAPI

## Architecture

The backend follows a layered architecture:

```text
Routes
  ↓
Controllers
  ↓
Services
  ↓
Repositories
  ↓
Mongoose Models / MongoDB
```

Main domain models:

- **User** — account information and role (`user` or `admin`)
- **Product** — vintage item information such as title, description, price, category and image URL
- **Wishlist** — relation between a user and a saved product

## Project Structure

```text
.
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── config/
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       ├── schemas/
│       ├── services/
│       └── types/
│
├── server/                 # Express REST API
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── errors/
│       ├── mappers/
│       ├── middlewares/
│       ├── models/
│       ├── repositories/
│       ├── routes/
│       ├── services/
│       └── types/
│
└── README.md
```

## Prerequisites

Before running the application, make sure the following are installed or available:

- Node.js
- npm
- A MongoDB database, either local or through MongoDB Atlas

## Environment Variables

### Backend

An example environment file is included at:

```text
server/.env.example
```

From the `server` directory, copy it to a new `.env` file:

```bash
cp .env.example .env
```

Then replace the placeholder values with your own:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

For example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.example.mongodb.net/ihandu
JWT_SECRET=replace_with_a_long_random_secret
PORT=3000
```

`PORT` is optional. If it is not provided, the backend defaults to port `3000`.

On Windows, the `.env` file can also be created manually by copying `server/.env.example`.

Do not commit the real `.env` file to GitHub.

### Frontend

Copy the existing example environment file:

```bash
cd client
cp .env.example .env
```

For local development, its value should be:

```env
VITE_API_URL=http://localhost:3000
```

On Windows, the `.env` file can also be created manually inside the `client` directory.

## Installation and Local Development

Clone the repository and install the backend and frontend dependencies separately.

```bash
git clone https://github.com/alkminibak/ihandu-vintage-showroom.git
cd ihandu-vintage-showroom
```

### 1. Backend

```bash
cd server
npm install
```

Create the backend `.env` file as described above, then start the development server:

```bash
npm run dev
```

By default, the backend runs at:

```text
http://localhost:3000
```

If you change `PORT` in `server/.env`, use that port instead and update the frontend `VITE_API_URL` accordingly.

### 2. Frontend

Open a second terminal:

```bash
cd client
npm install
```

Create the frontend `.env` file and start Vite:

```bash
npm run dev
```

Vite will display the local frontend URL in the terminal, typically:

```text
http://localhost:5173
```

Both the backend and frontend must be running for the complete application to work locally.

## Database Setup

No manual database schema creation is required. Mongoose creates the required MongoDB collections from the application models when data is first stored.

The main collections are based on the following models:

- `User`
- `Product`
- `Wishlist`

A newly registered account receives the `user` role by default.

### Creating an Admin Account

The application intentionally does not allow users to register themselves as administrators.

To test the admin functionality:

1. Register a normal account through the application.
2. Open the MongoDB database, for example through MongoDB Atlas.
3. Find the account in the users collection.
4. Change its `role` value from:

```text
user
```

to:

```text
admin
```

5. Log out and log in again so that a new JWT containing the admin role is issued.

The admin can then access:

```text
/admin
```

and create, edit or delete products.

## API Documentation

When the backend is running, Swagger UI is available at:

```text
http://localhost:3000/api-docs
```

It documents the application's REST API and allows the endpoints to be inspected and tested.

Protected endpoints use JWT Bearer authentication.

## Main API Endpoints

| Method | Endpoint               | Access        | Description                        |
| ------ | ---------------------- | ------------- | ---------------------------------- |
| GET    | `/products`            | Public        | Get all products                   |
| GET    | `/products/:id`        | Public        | Get one product                    |
| POST   | `/products`            | Admin         | Create a product                   |
| PUT    | `/products/:id`        | Admin         | Update a product                   |
| DELETE | `/products/:id`        | Admin         | Delete a product                   |
| POST   | `/users/register`      | Public        | Register a user                    |
| POST   | `/users/login`         | Public        | Log in                             |
| GET    | `/wishlist`            | Authenticated | Get the user's wishlist            |
| POST   | `/wishlist/:productId` | Authenticated | Add a product to the wishlist      |
| DELETE | `/wishlist/:productId` | Authenticated | Remove a product from the wishlist |

## Authentication and Authorization

Authentication is implemented with JSON Web Tokens.

After successful registration or login, the backend returns a JWT. The frontend stores the token and sends it in protected requests using the Authorization header:

```text
Authorization: Bearer <token>
```

Authorization is role-based:

- `user` accounts can use wishlist functionality.
- `admin` accounts can access the protected admin dashboard and product management endpoints.

Passwords are hashed with bcrypt before being stored in the database.

## Build

### Backend Production Build

From the `server` directory:

```bash
npm install
npm run build
```

TypeScript is compiled into the `server/dist` directory.

Start the compiled backend with:

```bash
npm start
```

The production environment must provide:

```env
MONGODB_URI=...
JWT_SECRET=...
PORT=...
```

`PORT` may be supplied automatically by the hosting provider. If it is not set, the application falls back to port `3000`.

### Frontend Production Build

Before building the frontend, set `VITE_API_URL` to the URL where the backend API will be deployed:

```env
VITE_API_URL=https://your-backend-url.example.com
```

Then run:

```bash
cd client
npm install
npm run build
```

Vite creates the production-ready frontend files in:

```text
client/dist
```

The contents of `client/dist` can then be served by a static hosting provider or web server.

## Deployment

The frontend and backend can be deployed independently.

### Backend

On a Node.js hosting service:

1. Configure `MONGODB_URI` and `JWT_SECRET` as environment variables. Configure `PORT` as well if required by the hosting provider.
2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript application:

```bash
npm run build
```

4. Start the server:

```bash
npm start
```

The hosting service must expose the backend on its public URL.

### Frontend

On a static frontend hosting service:

1. Set `VITE_API_URL` to the public backend URL.
2. Install dependencies:

```bash
npm install
```

3. Build the application:

```bash
npm run build
```

4. Deploy the generated `dist` directory.

Because the application uses client-side routing, the hosting provider should be configured to fall back to `index.html` for frontend routes such as `/login`, `/wishlist`, `/products/:id` and `/admin`.

## Available Scripts

### Backend (`server`)

```bash
npm run dev      # Run the API in development mode
npm run build    # Compile TypeScript
npm start        # Run the compiled API
```

### Frontend (`client`)

```bash
npm run dev      # Start Vite development server
npm run build    # Create production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Notes

- Product images are stored as image URLs rather than binary files in MongoDB.
- Wishlist routes require authentication.
- Product creation, editing and deletion require an authenticated administrator.
- API documentation is available through Swagger UI while the backend is running.

---

**I Hand U — Curated Vintage Collection**  
Final Project — Coding Factory 10, Athens University of Economics and Business
