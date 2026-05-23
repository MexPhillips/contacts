# Contacts API - Part 1

A Node.js Express API for managing contacts stored in MongoDB, with a simple frontend and Swagger docs.

## Project structure

```
├── server.js                 # Main Express application
├── package.json              # Project dependencies
├── .env                      # Environment variables (not in git)
├── controllers/contacts.js   # Contact business logic
├── routes/contacts.js        # Contact API endpoints
├── db/connection.js          # MongoDB connection handler
├── frontend/                 # Static UI
├── backend/                  # Professional profile API
└── docs/swagger.js           # OpenAPI / Swagger spec
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and set your MongoDB Atlas URI:

```bash
cp .env.example .env
```

3. Seed the database (optional):

```bash
npm run seed
```

4. Start the server:

```bash
npm run dev
```

API docs: `http://localhost:3000/api-docs`

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm start`   | Run production server    |
| `npm run dev` | Run with nodemon         |
| `npm run seed`| Seed contacts collection |
