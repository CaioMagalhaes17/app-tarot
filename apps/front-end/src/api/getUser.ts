import { AxiosError } from "axios"
import { Api } from "./axios"

export async function getUser() {

  try {
    const response = await Api().get('/user')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {

      // Swal.fire({
      //   title: 'Erro não tratado',
      //   icon: 'error'
      // })
    }
  }
}