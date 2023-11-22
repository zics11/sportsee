import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../../data/mock-data'
import { useState, useEffect } from 'react'

export function useFetch(url: string, userId: number) {
  const [data, setData] = useState<any | undefined>(undefined)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const mock: boolean = false

  useEffect(() => {
    const urlId = url.replace('${userId}', userId.toString())
    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(urlId)
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`)
        }
        const json = await response.json()
        setData(json.data)
      } catch (err: any) {
        console.error(err);
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    function getMockData(type: string) {
      switch (type) {
        case 'http://localhost:3000/user/${userId}':
          return USER_MAIN_DATA.find((data) => data.id === userId)
        case 'http://localhost:3000/user/${userId}/activity':
          return USER_ACTIVITY.find((data) => data.userId === userId)
        case 'http://localhost:3000/user/${userId}/average-sessions':
          return USER_AVERAGE_SESSIONS.find((data) => data.userId === userId)
        case 'http://localhost:3000/user/${userId}/performance':
          return USER_PERFORMANCE.find((data) => data.userId === userId)
        default:
          return null
      }
    }

    if (!mock) {
      fetchData()
    } else {
      const mockData = getMockData(url)
      setData(mockData)
      setLoading(false)
    }
  }, [url, mock, userId]) // Dépendances du useEffect

  return { isLoading, data, error }
}
