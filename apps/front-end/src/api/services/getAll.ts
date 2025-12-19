import { AxiosError } from "axios"
import { Api } from "../axios";
import { Service } from "../../@types/atendent-service.type";

export async function getAllServices(): Promise<Service[] | undefined> {
  try {
    const response = await Api().get('/services')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao buscar serviços:', error.message)
    }
    throw error
  }
}

