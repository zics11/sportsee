import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import VerticalMenu from '../../components/VerticalMenu'
import { useParams } from 'react-router-dom'

function Home() {
  const [data, setData] = useState<User | null>(null)
  const { id: stringId } = useParams();
  const id = Number(stringId) || 0;
  console.log(id)

  const {
    data: mainData,
    isLoading: isMainLoading,
    error: mainError,
  } = useFetch('http://localhost:3000/user/${userId}', '', id)

  const {
    data: activityData,
    isLoading: isActivityLoading,
    error: activityError,
  } = useFetch('http://localhost:3000/user/${userId}/activity', '', id)

  const {
    data: sessionsData,
    isLoading: isSessionsLoading,
    error: sessionsError,
  } = useFetch('http://localhost:3000/user/${userId}/average-sessions', '', id)

  const {
    data: performanceData,
    isLoading: isPerformanceLoading,
    error: performanceError,
  } = useFetch('http://localhost:3000/user/${userId}/performance', '', id)

  useEffect(() => {
    // Assurez-vous que toutes les données sont chargées avant de créer l'instance de User
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

  console.log('activityData', activityData)
  console.log('userData', data)
  console.log('getActivityData', data?.getActivityData())

  return (
    <section className="  h-full flex flex-row">
      <VerticalMenu />
      Bonjour {data?.getFirstName()}
      ID de l'utilisateur : {data?.getKeyData()?.proteinCount}

    </section>
  )
}

export default Home
