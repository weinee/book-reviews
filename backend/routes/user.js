import express from "express";

import { signIn, register } from "../controllers/user.js";

const router = express.Router();

router.post("/register", register);
router.post("/signIn", signIn);

export default router;
