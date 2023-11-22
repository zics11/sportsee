/* eslint-disable no-template-curly-in-string */
import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import { useParams, Navigate } from 'react-router-dom'

function Activity() {
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
      <h2 className=" text-2xl">Activité quotidienne :</h2>
      <br />
      {data?.getActivityData()?.map((session, index) => (
        <div key={index}>
          <p>Day: {session.day}</p>
          <p>calories: {session.calories}</p>
          <p>kilogram: {session.kilogram}</p>
          <br />
        </div>
      ))}
      <h2 className=" text-2xl">Chiffres clés :</h2>
      <br />
      <p>calorie Count : {data?.getKeyData().calorieCount}</p>
      <p>carbohydrate Count : {data?.getKeyData().carbohydrateCount}</p>
      <p>lipid Count : {data?.getKeyData().lipidCount}</p>
      <p>protein Count : {data?.getKeyData().proteinCount}</p>
      <br />
    </div>
  )
}

export default Activity
