import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string) => {
  // const controller = new AbortController()

  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })

    // return () => controller.abort() { signal: controller.signal }
  }, [])

  return { data, error, isLoading }
}

export default useData
