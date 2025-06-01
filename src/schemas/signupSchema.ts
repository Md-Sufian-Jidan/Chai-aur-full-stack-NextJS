import { z } from 'zod'


export const usernameValidation = z
    .string()
    .min(2, "User name must be at least 2 characters")
    .min(20, "User name must be no more than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "User name must not contain special character")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}).max(12, {message: "Password must no more than 12 characters"})
})

