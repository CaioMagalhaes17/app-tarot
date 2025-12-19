import { AxiosError } from "axios"
import { Api } from "../axios";
import { AtendentType } from "../../@types/atendent.type";
import { Schedule } from "../../@types/schedule.type";

export type UpdateAtendentPayload = {
  name: string;
  bio: string;
  schedule?: Schedule;
}

export async function updateAtendent(
  payload: UpdateAtendentPayload
): Promise<AtendentType | undefined> {
  try {
    const response = await Api().put(`/atendent/`, payload)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('Erro ao atualizar atendente:', error.message)
    }
    throw error
  }
}

