import { z } from 'zod'

// Login form schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Required')
})

// Registration form schema with password requirements
export const registerSchema = z.object({
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  email: z.string().email('Invalid email'),
  password: z.string()
    .min(8, 'Min 8 characters')
    .regex(/[A-Z]/, 'Need 1 uppercase letter')
    .regex(/[0-9]/, 'Need 1 number')
    .regex(/[!@#$%&*]/, 'Need 1 special char (!@#$%&*)'),
  confirmPassword: z.string().min(1, 'Confirm your password')
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
})

// Forgot password form schema
export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email')
})

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema> 