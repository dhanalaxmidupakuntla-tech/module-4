import express from "express";
import { signup, myProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/myprofile", myProfile);

module.exports = router;