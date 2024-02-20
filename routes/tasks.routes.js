import {Router} from "express"
import { authRequired } from "../middlewares/validateToken.js"

const router = Router()

router.get("/Tasks",authRequired,(req,res)=> res.send("tasks"))
router.get("/Tasks")
router.get("/Tasks")
router.get("/Tasks")
router.get("/Tasks")

export default router