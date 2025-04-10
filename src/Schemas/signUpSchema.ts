import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2 , "username must be atleast Two characters")
    .max(20 , "username must be no more than 20 Characters")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email Address"}),
    password : z.string().min(6 , {message: "password must be atleast 6 characters"})

})