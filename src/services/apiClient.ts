import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd6a8a1c353c7492389abefb893c8f6ae',
  },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)

  post = (data: T) =>
    axiosInstance
      .post<FetchResponse<T>>(this.endpoint, data)
      .then((res) => res.data)
}

export default APIClient
