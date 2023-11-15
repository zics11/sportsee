import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import { useParams } from 'react-router-dom'

function Activity() {
  const [data, setData] = useState<User | null>(null)
  const { id: stringId } = useParams()
  const id = Number(stringId) || 0
  console.log(id)

  const { data: mainData } = useFetch(
    'http://localhost:3000/user/${userId}',
    id
  )

  const { data: activityData } = useFetch(
    'http://localhost:3000/user/${userId}/activity',
    id
  )

  const { data: sessionsData } = useFetch(
    'http://localhost:3000/user/${userId}/average-sessions',
    id
  )

  const { data: performanceData } = useFetch(
    'http://localhost:3000/user/${userId}/performance',
    id
  )

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
