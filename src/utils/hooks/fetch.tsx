import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../data/mock-data'
import { useState, useEffect } from 'react'

export function useFetch(url: string, mock: string, userId: number) {
  const [data, setData] = useState<any | undefined>(undefined);
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const urlId = url.replace('${userId}', userId.toString())
    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(urlId)
        const json = await response.json()
        setData(json.data)
      } catch (err: any) {
        console.error(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    function getMockData(type: string) {
      switch (type) {
        case 'main':
          return USER_MAIN_DATA.find((data) => data.id === userId)
        case 'activity':
          return USER_ACTIVITY.find((data) => data.userId === userId)
        case 'average_sessions':
          return USER_AVERAGE_SESSIONS.find((data) => data.userId === userId)
        case 'performance':
          return USER_PERFORMANCE.find((data) => data.userId === userId)
        default:
          return null
      }
    }

    if (!mock) {
      fetchData()
    } else {
      const mockData = getMockData(mock)
      setData(mockData)
      setLoading(false)
    }
  }, [url, mock, userId]) // Dépendances du useEffect

  return { isLoading, data, error }
}
