import { Api } from "./axios";

export async function sendVerifyLink(name: string, email: string) {
  try {
    const reponse = await Api().post('/user/sendVerifyEmail', { name, email })
    return reponse
  } catch (error) {
    console.log(error)
  }

}