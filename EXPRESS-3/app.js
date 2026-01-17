//app.js
import express from "express";
import userRouter from "./userRoutes/user.js";

const app = express();
app.use(express.json());

//use the router
app.use("/user", usersRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));