import express from "express";
import { readFileSync, writeFileSync } from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => JSON.parse(readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) =>
  writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

/* CREATE USER */
router.post("/add", (req, res) => {
  const db = readDB();
  const newUser = { id: Date.now(), ...req.body };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: "User added", user: newUser });
});

/* GET ALL USERS */
router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.users);
});

/* GET SINGLE USER */
router.get("/:userId", (req, res) => {
  const db = readDB();
  const user = db.users.find(
    (u) => u.id === Number(req.params.userId)
  );

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

/* UPDATE USER */
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(
    (u) => u.id === Number(req.params.userId)
  );

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);

  res.status(200).json({ message: "User updated" });
});

/* DELETE USER */
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const filteredUsers = db.users.filter(
    (u) => u.id !== Number(req.params.userId)
  );

  if (filteredUsers.length === db.users.length) {
    return res.status(404).json({ error: "User not found" });
  }

  db.users = filteredUsers;
  writeDB(db);

  res.status(200).json({ message: "User deleted" });
});

export default router;
