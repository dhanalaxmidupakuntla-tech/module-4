import express from "express";

const app = express();

// ✅ Middleware to read form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h2>User Form</h2>
    <form method="POST" action="/submit">
      <input type="text" name="name" placeholder="Enter the name" /><br/><br/>
      <input type="number" name="age" placeholder="Enter the age" /><br/><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`Form received: ${JSON.stringify(req.body)}`);
});

app.listen(2000, () => {
  console.log("Server running on port 2000");
});
