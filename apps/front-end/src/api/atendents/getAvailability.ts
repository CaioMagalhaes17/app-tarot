import { AxiosError } from "axios"
import { Api } from "../axios";
import { AvailabilityResponse, AvailabilityParams } from "../../@types/availability.type";

export async function getAtendentAvailability(
  id: string, 
  params: AvailabilityParams
): Promise<AvailabilityResponse | undefined> {
  try {
    const response = await Api().get(`/atendent/${id}/availability`, {
      params: {
        startDate: params.startDate,
        endDate: params.endDate
      }
    })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao buscar disponibilidade do atendente:', error.message)
    }
    throw error
  }
}

