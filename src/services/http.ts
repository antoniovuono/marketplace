import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from './api'

async function get(url: string, params?: AxiosRequestConfig<any>) {
  try {
    return await axiosInstance.get(url, { params })
  } catch (error) {
    throw error
  }
}

async function post(url: string, params?: AxiosRequestConfig<any>) {
  try {
    return await axiosInstance.post(url, params)
  } catch (error) {
    throw error
  }
}

async function put(url: string, params?: AxiosRequestConfig<any>) {
  try {
    return await axiosInstance.put(url, params)
  } catch (error) {
    throw error
  }
}

async function patch(url: string, params?: AxiosRequestConfig<any>) {
  try {
    return await axiosInstance.patch(url, params)
  } catch (error) {
    throw error
  }
}

async function remove(url: string, params?: AxiosRequestConfig<any>) {
  try {
    return await axiosInstance.delete(url)
  } catch (error) {
    throw error
  }
}

export { get, post, put, patch, remove }
