import express from 'express';
const app = express();

// app.get('/home', (req, res) => {
//   res.send('Hi, World!');
// });

// app.post('/home', (req, res) => {
//   res.json({ message: 'Data received' });
// });

// app.get('/user', (req, res) => {
//     res.json("this is get request");
// });

// app.post('/user', (req, res) => {
//     res.json({mesage: "this is post request"});
// });

app.use(express.json())
let todos = []

app.post("/todos", (req, res) => {
    todos.push(req.body.task);
    todos.push(req.body.hobby)
    res.json({
        message: "todo added", todos
    })
})

app.get("/todos", (req, res) => {
    res.json(todos)
})


app.listen(2705, () => {
  console.log('Server is running');
});