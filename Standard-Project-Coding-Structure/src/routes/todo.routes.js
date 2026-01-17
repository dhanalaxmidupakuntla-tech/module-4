import express from "express";
import {
  getTodos,
  getSingleTodo,
  addTodo,
  updateTodoById,
  deleteTodoById
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getSingleTodo);
router.post("/add", addTodo);
router.put("/update/:id", updateTodoById);
router.delete("/delete/:id", deleteTodoById);

export default router;
