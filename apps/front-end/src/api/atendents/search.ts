import { AxiosError } from "axios"
import Swal from "sweetalert2";
import { Api } from "../axios";

export async function SearchAtendents() {
  try {
    const response = await Api().get('/user/login')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status === 400 && error.response?.data.message.includes('inválidos.')) {
        Swal.fire({
          title: 'Login ou senha inválidos',
          icon: 'error'
        })
      }

    }
  }
}