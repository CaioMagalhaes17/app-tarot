import { Api } from "./axios";

export async function validateMagicLink(token: string) {
  try {
    const reponse = await Api().get('/user/verifyEmail/' + token)
    return reponse
  } catch (error) {
    console.log(error)
  }

}