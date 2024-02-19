import mongoose from "mongoose";

export  const connectDB = async () => {
   try {
        await mongoose.connect("mongodb://localhost/LOGAPP")
        console.log("DB Connected")
   } catch (error) {
      console.log(error)
   }
 
}
