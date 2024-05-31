import axios from 'axios'
import { SERVER_URL } from '@env'

interface apiResponse {
  isSuccess: boolean
  code: string
  message: string
}

const api = axios.create({
  baseURL: SERVER_URL,
  validateStatus: status => {
    return status < 300
  },
})

export { api, apiResponse }
