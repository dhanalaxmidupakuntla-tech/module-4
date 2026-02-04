import express from 'express';
import auth from '../middleware/auth.middleware.js';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const router = express.Router();

router.use(auth);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;