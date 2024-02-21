import {Router} from "express"
import { createTasks, deleteTasks, getTaskByID, getTasks, upDateTasks } from "../controllers/tasks.controllers.js"
import { authRequired } from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validator.middleware.js"
import { createTasksSchema } from "../schemas/tasks.schema.js"


const router = Router()

router.get("/Tasks", authRequired, getTasks)
router.get("/Tasks/:id", authRequired, getTaskByID)
router.post("/Tasks", authRequired,validateSchema(createTasksSchema), createTasks)
router.delete("/Tasks/:id",authRequired, deleteTasks)
router.put("/Tasks/:id",authRequired, upDateTasks)

export default router