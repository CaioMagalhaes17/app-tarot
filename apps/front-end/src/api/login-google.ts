import { Api } from "./axios";

export async function loginWithGoogle(accessToken: string): Promise<{ accessToken: string }> {
  const response = await Api().post('/user/login/google', {
    idToken: accessToken
  });

  return response.data
}