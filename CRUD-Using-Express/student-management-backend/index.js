import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// ES Module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "db.json");

app.use(express.json());

// Helper functions
const readData = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// GET all students
app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

// POST new student
app.post("/students", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body missing. Did you send JSON?"
    });
  }

  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({
      message: "name, course and year are required"
    });
  }

  const data = readData();
  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});


// PUT update student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Request body is missing. Send JSON data."
    });
  }

  const { name, course, year } = req.body;

  const data = readData();
  const index = data.students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students[index] = {
    ...data.students[index],
    name: name ?? data.students[index].name,
    course: course ?? data.students[index].course,
    year: year ?? data.students[index].year
  };

  writeData(data);

  res.json({
    message: "Student updated successfully",
    student: data.students[index]
  });
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();

  const newList = data.students.filter((s) => s.id !== id);

  if (newList.length === data.students.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students = newList;
  writeData(data);

  res.json({ message: "Student deleted" });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
