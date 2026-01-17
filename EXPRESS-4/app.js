import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

// ✅ Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: "Too many requests, please try again later",
    });
  },
});

// ✅ Apply limiter globally
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/user", (req, res) => {
  res.json([
    { id: 1, name: "ani" },
    { id: 2, name: "dhana" },
  ]);
});

app.post("/user", (req, res) => {
  res.json({
    message: "Form received",
    data: req.body,
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
