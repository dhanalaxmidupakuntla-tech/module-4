import express from 'express';
import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);

export default app;
