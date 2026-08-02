require('dotenv').config();
const express = require('express');

const connectDB = require('./db/connect');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const todosRouter = require('./routes/todos');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/todos', todosRouter);

app.use(errorHandler); // always last

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});