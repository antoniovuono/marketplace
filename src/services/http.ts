import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from './api'

async function get(url: string, params?: object) {
  try {
    return await axiosInstance.get(url, params)
  } catch (error) {
    throw error
  }
}

async function post(url: string, params?: object, config?: Pick<AxiosRequestConfig, 'headers'>) {
  try {
    return await axiosInstance.post(url, params, config)
  } catch (error) {
    console.log('postError', post)
    throw error
  }
}

async function patch(url: string, params?: object, config?: Pick<AxiosRequestConfig, 'headers'>) {
  try {
    return await axiosInstance.patch(url, params, config)
  } catch (error) {
    throw error
  }
}

async function remove(url: string, params?: object) {
  try {
    return await axiosInstance.delete(url, params)
  } catch (error) {
    throw error
  }
}

export { get, post, patch, remove }
