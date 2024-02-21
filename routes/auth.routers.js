import { Router } from "express";
import { logOut, login, profile, register } from "../controllers/auth.controllers.js";
import { authRequired} from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router()
router.post("/Register",validateSchema(registerSchema), register)
router.post("/Login",validateSchema(loginSchema),  login)
router.post("/Logout", logOut)
router.get("/Profile", authRequired, profile)

export default router