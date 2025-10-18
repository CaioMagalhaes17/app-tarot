import axios, { AxiosInstance } from 'axios'

let api: AxiosInstance
export function Api() {
  if (!api) {
    const token = localStorage.getItem('accessToken')
    api = axios.create({
      baseURL: window.location.hostname === 'localhost' ? 'http://localhost:3000/' : 'https://app-tarot-backend.fly.dev/',
      headers: {
        Authorization: token ? 'Bearer ' + token : ''
      }
    })
  }
  return api
}
