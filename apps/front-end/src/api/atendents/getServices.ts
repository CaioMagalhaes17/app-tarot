import { AxiosError } from "axios"
import { Api } from "../axios";
import { AtendentService } from "../../@types/atendent-service.type";

export async function getAtendentServices(id: string): Promise<AtendentService[] | undefined> {
  try {
    const response = await Api().get(`/atendent-service/by-atendent/${id}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao buscar serviços do atendente:', error.message)
    }
    throw error
  }
}

