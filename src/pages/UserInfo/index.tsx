/* eslint-disable no-template-curly-in-string */
import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import { useParams, Navigate } from 'react-router-dom'

function UserInfo() {
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
      <h2 className=" text-2xl">Infos utilisateur :</h2>
      <br />
      <p>Id : {data?.getUserInfo().id}</p>
      <p>firstName : {data?.getUserInfo().firstName}</p>
      <p>lastName : {data?.getUserInfo().lastName}</p>
      <p>age : {data?.getUserInfo().age}</p>
      <br />
      <h2 className=" text-2xl">Complétion objectif :</h2>
      <br />
      <p>complétion de l’objectif journalier : {data?.getScore()[0]?.value}</p>
      <br />
    </div>
  )
}

export default UserInfo
