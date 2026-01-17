import { readData, writeData } from "../utils/fileHandler.js";

export const getAllTodos = () => {
  const data = readData();
  return data.todos;
};

export const getTodoById = (id) => {
  const data = readData();
  return data.todos.find(todo => todo.id == id);
};

export const createTodo = (title) => {
  const data = readData();

  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  };

  data.todos.push(newTodo);
  writeData(data);
  return newTodo;
};

export const updateTodo = (id, updates) => {
  const data = readData();
  const todo = data.todos.find(t => t.id == id);

  if (!todo) return null;

  todo.title = updates.title ?? todo.title;
  todo.completed = updates.completed ?? todo.completed;

  writeData(data);
  return todo;
};

export const deleteTodo = (id) => {
  const data = readData();
  const initialLength = data.todos.length;

  data.todos = data.todos.filter(t => t.id != id);
  writeData(data);

  return data.todos.length < initialLength;
};
