import {Router} from "express"
import { createTasks, deleteTasks, getTaskByID, getTasks, upDateTasks } from "../controllers/tasks.controllers.js"
import { authRequired } from "../middlewares/validateToken.js"


const router = Router()

router.get("/Tasks", authRequired, getTasks)
router.get("/Tasks/:id", authRequired, getTaskByID)
router.post("/Tasks",authRequired, createTasks)
router.delete("/Tasks/:id",authRequired, deleteTasks)
router.put("/Tasks/:id",authRequired, upDateTasks)

export default router