const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

// CREATE
router.post('/', async (req, res, next) => {
  try {
    const { task, completed } = req.body;

    if (!task) {
      const err = new Error('Task is required');
      err.status = 400;
      throw err;
    }

    const newTodo = await Todo.create({ task, completed });
    res.status(201).json(newTodo);
  } catch (err) {
    next(err);
  }
});

// READ ALL + FILTER (?completed=true / ?completed=false)
router.get('/', async (req, res, next) => {
  try {
    const { completed } = req.query;
    const filter = {};

    if (completed !== undefined) {
      filter.completed = completed === 'true';
    }

    const todos = await Todo.find(filter);
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

// READ ONE
router.get('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      const err = new Error('Todo not found');
      err.status = 404;
      throw err;
    }

    res.json(todo);
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = 'Invalid ID';
      err.status = 400;
    }
    next(err);
  }
});

// UPDATE
router.patch('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      const err = new Error('Todo not found');
      err.status = 404;
      throw err;
    }

    res.json(todo);
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = 'Invalid ID';
      err.status = 400;
    }
    next(err);
  }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      const err = new Error('Todo not found');
      err.status = 404;
      throw err;
    }

    res.json({ message: `Todo ${req.params.id} deleted successfully` });
  } catch (err) {
    if (err.name === 'CastError') {
      err.message = 'Invalid ID';
      err.status = 400;
    }
    next(err);
  }
});

module.exports = router;