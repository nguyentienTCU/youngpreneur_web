export type UserIdentity = {
  firstName: string
  lastName: string
  displayName: string
  email?: string
}

export type AuthState = {
  user: UserIdentity | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export type AccountData = {
  username: string
  password: string
}

export type LoginFormData = {
  email: string
  password: string
}

export type RegisterFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export type ForgotPasswordFormData = {
  email: string
}

export type PasswordRequirements = {
  hasUpperCase: boolean
  hasNumber: boolean
  hasSpecialChar: boolean
  hasMinLength: boolean
}

export type Account = {
  firstName?: string
  lastName?: string
  displayName?: string
  email?: string
  accountId?: string
  avatar?: string
} 