import mongoose from "mongoose";


 const taskSchema = new mongoose.Schema ({
    Title: {
        type :String,
    required: true},
    Description: {
        type :String,
    required:true},
    Date:{ type: Date,
    default: Date.now},
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
}, 

{
    timestamps:true
})


export default mongoose.model("Task", taskSchema)