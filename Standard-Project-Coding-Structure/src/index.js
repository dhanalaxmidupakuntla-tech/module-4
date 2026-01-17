import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import { loggerMiddleware } from "./middleware/logger.middleware.js";

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
