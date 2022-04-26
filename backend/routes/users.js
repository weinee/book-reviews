import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/signIn", signIn);

export default router;
