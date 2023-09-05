//api/signup

export interface SignupRequest {
  email: string
  password: string
  name: string
  grade: number
  branch: string
}

export interface SigninRequest {
  email: string
  password: string
}
