
import createAccesToken from "../libs/jwt.js"
import User from "../models/user.model.js"
import Bcrypt from "bcryptjs"



export const register = async (req, res) =>{

    
   const {username, email, password} = req.body
   const passwordHash = await Bcrypt.hash(password, 10)
   try {
    



  const newUser = new User ({
    username,
    email,
    password : passwordHash,
  })
  console.log(newUser)
const userSaved = await newUser.save()

const token = await createAccesToken({id:userSaved._id})
res.cookie("token", token)
res.json({
    message:"Usuario creado correctamente",
    id:userSaved._id,
    username:userSaved.username,
    email:userSaved.email
})

   } catch (error) {
    res.status(500).json({message:error.message})
   }
}

export const login = async (req, res) =>{

    
    const {email, password} = req.body
    
    try {
     const userFound = await User.findOne({email})
     if (!userFound) return res.status(400).json({message:"Usuario no encontrado"})
        const isMatch = await Bcrypt.compare(password, userFound.password)
     if (!isMatch) return res.status(400).json({message:"Contaseña incorrecta"})
 

 
 const token = await createAccesToken({id:userFound._id})
 res.cookie("token", token)
 res.json({
     message:"Login Exitoso!!",
     id:userFound._id,
     username:userFound.username,
     email:userFound.email
 })
 
    } catch (error) {
     res.status(500).json({message:error.message})
    }
 }