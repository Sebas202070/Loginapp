import express from "express"
import morgan from "morgan"
import authRouters from "./routes/auth.routers.js"
import cookieParser from "cookie-parser"
import tasksrouters from "./routes/tasks.routes.js"

const app = express()
app.use(morgan("dev") )
app.use(express.json())
app.use(cookieParser())
app.use("/api",authRouters )
app.use("/api",tasksrouters )

export default app