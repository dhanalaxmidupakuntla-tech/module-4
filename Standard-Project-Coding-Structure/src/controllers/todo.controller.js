import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../models/todo.model.js";

export const getTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

export const getSingleTodo = (req, res) => {
  try {
    const todo = getTodoById(req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

export const addTodo = (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = createTodo(req.body.title);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const updateTodoById = (req, res) => {
  try {
    const updatedTodo = updateTodo(req.params.id, req.body);

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodoById = (req, res) => {
  try {
    const deleted = deleteTodo(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
