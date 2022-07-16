export interface FormProps {
  type: 'join' | 'login'
}

export interface FormField {
  email: string
  password: string
  'confirm-password': string
  phone: string
  name: string
}

export interface PasswordError {
  isDuplicate: boolean
  isViolatingStandard: boolean
  isIncludingEmail: boolean
}
