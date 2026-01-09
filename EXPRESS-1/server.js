import express from "express";
const app = express(); //create express application instance
const PORT = process.env.PORT || 2705;

app.get("/home", (req, res) => {
    res.send("Welcome to Home Page")
})

app.get("/contact", (req, res) => {
    res.send(`<h1 style="color: blue;">Welcome to Contact Page</h1>`)
})

app.get("/blog", (req, res) => {
    res.send("{message: \"Welcome to Blog Page\"}")
})

app.listen(PORT, () => {
    console.log('Seerver is running on port', PORT)
})
