import { useState, useEffect } from 'react'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, { ...options })
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      setData(data)
      setError(null)
      setIsLoading(false)
    } catch (error) {
      setError(`An error occurred: ${error}. Please try again.`)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])
  return { data, isLoading, error }
}

export default useFetch
