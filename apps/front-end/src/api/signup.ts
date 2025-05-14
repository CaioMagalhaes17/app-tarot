import { AxiosError } from "axios"
import Swal from "sweetalert2"
import { Api } from "./axios"
import { UserSignupProps } from "../@types/user.type"

export async function signup(data: UserSignupProps) {
  try {
    const response = await Api().post('/user/signup', data)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data.message.includes('Login já existe')) {
        Swal.fire({
          title: error.response?.data.message,
          icon: 'error'
        })
      }
    }
  }
}