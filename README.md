# Todo API

A RESTful API for creating, retrieving, updating, and deleting todos, built with Express.js and MongoDB. This project migrates a basic in-memory CRUD API to persistent storage using Mongoose, so data survives server restarts.

## Features

- Full CRUD operations for todos (Create, Read, Update, Delete)
- Persistent storage with MongoDB Atlas via Mongoose
- Filter todos by completion status via query parameter (`?completed=true` / `?completed=false`)
- Request logging middleware (method, URL, timestamp, IP)
- Centralized global error handler with consistent JSON error responses
- try/catch error handling across all routes, forwarding errors via `next()`
- Automatic `createdAt` / `updatedAt` timestamps on every document

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose (ODM)
- dotenv (environment variables)
- nodemon (development)

## Project Structure