require('dotenv').config();
import express from "express";
import dotenv from "dotenv";
const userRouter = await import("./routes/user.routes.js").then(mod => mod.default);

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", userRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
