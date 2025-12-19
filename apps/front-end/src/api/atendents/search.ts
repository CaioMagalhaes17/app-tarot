import { AxiosError } from "axios"
import { Api } from "../axios";

type AtendentsParams = {
  limit: number;
  page: number;
  service?: string
  search?: string
}
export async function getAtendents(params: AtendentsParams) {
  try {
    const response = await Api().get('/atendent', { params: params })
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('deu bosta')
    }
  }
}