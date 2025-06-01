import z from "zod";

export const employeeSchema = z.object({
    name: z.string().min(9).max(20),
    email: z.string().min(9).max(255).email(),
    status: z.string(),
    salary: z.string(),
    phone: z.string(),
    photo: z.string(),
    job: z.string(),
})

export type EmployeeSchemaType = z.infer<typeof employeeSchema>

export const LoginSchema = z.object({
    email: z.string().email({message: "Invalid email address"}).min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    rememberMe: z.boolean()
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email({message: "Invalid email address"}).min(1, "Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export type ReigsterSchemaType = z.infer<typeof RegisterSchema>