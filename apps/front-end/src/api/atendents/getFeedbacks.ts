import { AxiosError } from "axios"
import { Api } from "../axios";
import { FeedbackType } from "../../@types/atendent.type";

export async function getAtendentFeedbacks(atendentId: string): Promise<FeedbackType[] | undefined> {
  try {
    const response = await Api().get(`/feedbacks/atendent/${atendentId}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao buscar feedbacks do atendente:', error.message)
    }
    throw error
  }
}

