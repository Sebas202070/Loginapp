import z from "zod"

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required"

    }),
    email: z.string ({
        required_error: "Email is required"
    }).email({message: "Invalid email"}),
    password:z.string({required_error: "Password is required"}).min(7,{message:"Password must be at least 7 characters"})
})

export const loginSchema =  z.object({
    password: z.string({
        required_error: "Password is required"

    }).min(7,{message:"Password must be at least 7 characters"}),
    email: z.string ({
        required_error: "Email is required"
    }).email({message: "Invalid email"}),

})


