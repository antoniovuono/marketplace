import axios from 'axios'
import { AppError } from 'src/helpers/errors'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    }

    return Promise.reject(new AppError(error.message))
  },
)
