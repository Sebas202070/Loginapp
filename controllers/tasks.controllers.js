import task from "../models/task.model.js"



export const getTasks = async (req, res) => {
   const tasks = await task.find({User:req.user.payload.id}).populate("User")
   res.json(tasks)

}

export const createTasks = async (req, res) => {
    const {Title, Description, Date} = req.body

    const newTask =  new task({
        Title,Description,Date,User:req.user.payload.id
    })
    const savedTask = await newTask.save()
    
    return res.json(savedTask)
}
export const getTaskByID = async (req, res) => {
try {
    const find = await task.findById(req.params.id).populate("User")
if (!find) return res.status(400).json({message:"Task not found"})
return res.json(find)

} catch (error) {
    res.status(500).json({message:error.message})
}


}
export const upDateTasks = async (req, res) => {
    const upDateTask = await task.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!upDateTask) return res.status(400).json({message:"Task not found"})
    res.json(upDateTask)
}
export const deleteTasks = async (req, res) => {
    const deleteTask = await task.findByIdAndDelete(req.params.id)
    if(!deleteTask) return res.status(400).json({message:"Task not found"})
    res.sendStatus(404)
}
