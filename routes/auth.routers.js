import { Router } from "express";
import { logOut, login, profile, register } from "../controllers/auth.controllers.js";
import { authRequired} from "../middlewares/validateToken.js";

const router = Router()
router.post("/Register",register)
router.post("/Login", login)
router.post("/Logout", logOut)
router.get("/Profile", authRequired, profile)

export default router