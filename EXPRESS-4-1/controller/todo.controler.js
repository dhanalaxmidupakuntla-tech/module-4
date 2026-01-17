import { readData,writeData } from "../model/todo.model.js";

export const getTodos = ((req, res) => {
    const data = readData();
    res.json(data.todos);
})

export const getTodos1 = ((req, res) => {
    const data = readData();
    const todo = data.todos.find(t => t.id == Number(req.params.id))

    if (!todo) {
        return res.status(404).json({message: "Todo not found"})
    }

    res.json(todo)
})

export const addTodos = ((req, res) => {
    const data = readData();

    const newTodo = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };

    data.todos.push(newTodo);
    writeData(data);

    res.status(201).json(newTodo)
})

export const updateTodos = ((req, res) => {
    const data = readData();
    const index = data.todos.findIndex(t => t.id === Number(req.params.id));

    if (index === -1){
        return res.status(404).json({message: "Todo not found"})
    }

    data.todos[index].title = req.body.title ?? data.todos[index].title;
    data.todos[index].completed = req.body.completed ?? data.todos[index].completed

    writeData(data);
    res.json(data.todos[index]);
})

export const deleteTodos = ((req, res) => {
    const data = readData();
    const filteredTodos = data.todos.filter(t => t.id !== Number(req.params.id));

    if (filteredTodos.lenth === data.todos.length){
        return res.status(404).json({message: "Todo not found"})
    }

    data .todos = filteredTodos;
    writeData(data);

    res.json({message: "Todo deleted successfully"})
})