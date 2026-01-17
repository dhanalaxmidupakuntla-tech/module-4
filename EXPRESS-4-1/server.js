import express from "express";
import {readData, writeData} from "./model/todo.model.js";
import { deleteTodos, getTodos, getTodos1 } from "./controller/todo.controler.js";
import { addTodos, updateTodos } from "./controller/todo.controler.js";

const app = express();
const PORT = process.eventNames.PORT;

//middleware to read JSON body
app.use(express.json());

//-----------Helper Functions ---------

//------ROUTES -------

//1. GET all todos

app.get("/todos", getTodos);

app.get("/todos/:id", getTodos1)

//3. create a new todo
app.post("/todos", addTodos);

//update a todo
app.put("/todos/:id", updateTodos)

//delete a todo
app.delete("/todos/:id", deleteTodos)

app.listen(PORT, () => {
    console.log("server running")
})