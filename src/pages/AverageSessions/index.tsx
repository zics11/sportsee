/* eslint-disable no-template-curly-in-string */
import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import { useParams, Navigate } from 'react-router-dom'

function AverageSessions() {
  const [data, setData] = useState<User | null>(null)
  const { id: stringId } = useParams()
  const id = Number(stringId) || 0

  const [apiError, setApiError] = useState(false)

  const { data: mainData, error: mainError } = useFetch(
    'http://localhost:3000/user/${userId}',
    id
  )

  const { data: activityData, error: activityError } = useFetch(
    'http://localhost:3000/user/${userId}/activity',
    id
  )

  const { data: sessionsData, error: sessionsError } = useFetch(
    'http://localhost:3000/user/${userId}/average-sessions',
    id
  )

  const { data: performanceData, error: performanceError } = useFetch(
    'http://localhost:3000/user/${userId}/performance',
    id
  )

  useEffect(() => {
    if (mainError || activityError || sessionsError || performanceError) {
      setApiError(true)
    }
  }, [mainError, activityError, sessionsError, performanceError])

  useEffect(() => {
    if (mainData && activityData && sessionsData && performanceData) {
      const newUser = new User(
        mainData,
        activityData,
        sessionsData,
        performanceData
      )
      setData(newUser)
    }
  }, [mainData, activityData, sessionsData, performanceData])

  if (apiError) {
    return <Navigate to="/error" />
  }

  return (
    <div className="  m-11">
      {data?.getTrainingData()?.map((session, index) => (
        <div key={index}>
          <p>Day: {session.day}</p>
          <p>session Length: {session.sessionLength}</p>
          <br />
        </div>
      ))}
    </div>
  )
}

export default AverageSessions
