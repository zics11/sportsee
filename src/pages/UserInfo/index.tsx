import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import { useParams } from 'react-router-dom'

function UserInfo() {
  const [data, setData] = useState<User | null>(null)
  const { id: stringId } = useParams()
  const id = Number(stringId) || 0
  console.log(id)

  const {
    data: mainData,
  } = useFetch('http://localhost:3000/user/${userId}', id)

  const {
    data: activityData,
  } = useFetch('http://localhost:3000/user/${userId}/activity', id)

  const {
    data: sessionsData,
  } = useFetch('http://localhost:3000/user/${userId}/average-sessions', id)

  const {
    data: performanceData,
  } = useFetch('http://localhost:3000/user/${userId}/performance', id)

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
    <div className='  m-11'>
      <p>Id : {data?.getUserInfo().id}</p>
      <p>firstName : {data?.getUserInfo().firstName}</p>
      <p>lastName : {data?.getUserInfo().lastName}</p>
      <p>age : {data?.getUserInfo().age}</p>
    </div>
  )
}

export default UserInfo
