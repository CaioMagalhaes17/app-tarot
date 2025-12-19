import { AxiosError } from "axios"
import { Api } from "../axios";
import { AtendentType } from "../../@types/atendent.type";

export async function getAtendentById(id: string): Promise<AtendentType | undefined> {
  try {
    const response = await Api().get(`/atendent/${id}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao buscar atendente:', error.message)
    }
    throw error
  }
}

