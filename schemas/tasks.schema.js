import z from "zod"


export const createTasksSchema = z.object({
    Title: z.string({
        required_error: "Title es required"
    }),
    Description : z.string({
        required_error: "Description is required"
    }),
    Date: z.string().datetime().optional()
})