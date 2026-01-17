import express from "express";
import { readData, writeData } from "../utils/fileHandler.js";
import { rateLimiter } from "../middleware/rateLimiter.middleware.js";
import { validateTodo } from "../middleware/validateTodo.middleware.js";

const router = express.Router();

/* CREATE TODO */
router.post("/add", validateTodo, (req, res) => {
  const data = readData();

  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  data.todos.push(newTodo);
  writeData(data);

  res.status(201).json(newTodo);
});

/* GET ALL TODOS */
router.get("/", rateLimiter, (req, res) => {
  const data = readData();
  res.json(data.todos);
});

/* GET SINGLE TODO */
router.get("/:todoId", (req, res) => {
  const data = readData();
  const todo = data.todos.find(t => t.id == req.params.todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

/* UPDATE TODO */
router.put("/update/:todoId", (req, res) => {
  const data = readData();
  const todo = data.todos.find(t => t.id == req.params.todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todo.title = req.body.title ?? todo.title;
  writeData(data);

  res.json({ message: "Todo updated" });
});

/* DELETE TODO */
router.delete("/delete/:todoId", (req, res) => {
  const data = readData();
  data.todos = data.todos.filter(t => t.id != req.params.todoId);
  writeData(data);

  res.json({ message: "Todo deleted" });
});

export default router;
