import { Router } from "express";
import { login, register } from "../controllers/auth.controllers.js";

const router = Router()
router.post("/Register",register)
router.post("/Login", login)

export default router