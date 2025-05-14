import { AxiosError } from "axios"
import { Api } from "./axios"

export async function getUser() {

  try {
    const response = await Api().get('/user')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401 && window.location.pathname !== '/') {
        window.location.replace('/login')
      }
      // Swal.fire({
      //   title: 'Erro não tratado',
      //   icon: 'error'
      // })
    }
  }
}