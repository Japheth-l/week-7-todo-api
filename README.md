markdown
# Todo API

A RESTful Todo API built with Express.js and MongoDB (Mongoose), migrated from in-memory storage to persistent Atlas storage.

## Tech Stack

Node.js · Express.js · MongoDB Atlas · Mongoose · dotenv · nodemon

## Setup

```bash
git clone https://github.com/Japheth-l/group4-repo-C.git
cd group4-repo-C
npm install
```

Create a `.env` file:

PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/todo-db?retryWrites=true&w=majority


Run:

```bash
npm run dev     # development
npm start       # production
```

## Endpoints

| Method | Endpoint     | Description                             |
|--------|--------------|------------------------------------------|
| POST   | `/todos`     | Create a todo                           |
| GET    | `/todos`     | Get all todos (supports `?completed=`)  |
| GET    | `/todos/:id` | Get a todo by ID                        |
| PATCH  | `/todos/:id` | Update a todo by ID                     |
| DELETE | `/todos/:id` | Delete a todo by ID                     |

**Example**
```json
POST /todos
{ "task": "Buy groceries" }
```

## Error Handling

- Try/catch on every route, errors forwarded via `next(err)`
- Invalid MongoDB IDs → `400`, missing todos → `404`, server errors → `500`
- Centralized error handler returns consistent JSON: `{ "error": "message" }`

## Deployment

Deployed on [Render](https://week-7-todo-api-rnmc.onrender.com/todos). Auto-deploys on push to `main`. `MONGODB_URI` and `PORT` are set in Render's dashboard, never committed.

## Author

Japheth Lamuo — [Japheth-l](https://github.com/Japheth-l)