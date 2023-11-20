import { useState, useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'
import { User } from '../../utils/service/user'
import VerticalMenu from '../../components/VerticalMenu'
import { useParams } from 'react-router-dom'
import ActiviteQuotidienne from '../../components/Charts/ActiviteQuotidienne'
import Sessions from '../../components/Charts/Sessions'
import Performance from '../../components/Charts/Performance'
import Score from '../../components/Charts/Score'
import { CardInfos } from '../../components/CardInfos'

function Home() {
  const [data, setData] = useState<User | null>(null)
  const { id: stringId } = useParams()
  const id = Number(stringId) || 0
  console.log(id)

  const {
    data: mainData,
    isLoading: isMainLoading,
    error: mainError,
  } = useFetch('http://localhost:3000/user/${userId}', id)

  const {
    data: activityData,
    isLoading: isActivityLoading,
    error: activityError,
  } = useFetch('http://localhost:3000/user/${userId}/activity', id)

  const {
    data: sessionsData,
    isLoading: isSessionsLoading,
    error: sessionsError,
  } = useFetch('http://localhost:3000/user/${userId}/average-sessions', id)

  const {
    data: performanceData,
    isLoading: isPerformanceLoading,
    error: performanceError,
  } = useFetch('http://localhost:3000/user/${userId}/performance', id)

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

  return (
    <section className=" h-screen flex flex-row w-full -mt-24">
      <VerticalMenu />
      <div className=" flex flex-col justify-evenly h-full w-full items-center">
        <div className=" text-5xl font-medium mt-24 w-10/12 h-1/6 flex flex-col justify-evenly ">
          <p>
            Bonjour{' '}
            <span className="text-red-SportSee">
              {data?.getUserInfo()?.firstName}
            </span>
          </p>
          <p className=" text-lg font-normal ">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className=" flex space-x-7 w-10/12 h-4/6">
          <div className=" flex flex-col gap-7 w-3/4">
            <ActiviteQuotidienne data={data?.getActivityData() ?? []} />
            <div className=" flex space-x-7 h-1/2">
              <Sessions data={data?.getTrainingData() ?? []} />
              <Performance data={data?.getPerformanceData() ?? []} />
              <Score data={data?.getScore() ?? []} />
            </div>
          </div>
          <div className=" w-1/4 h-full justify-between flex flex-col">
            <CardInfos
              type="Calories"
              value={data?.getKeyData()?.calorieCount ?? 'N/A'}
            />
            <CardInfos
              type="Proteines"
              value={data?.getKeyData()?.proteinCount ?? 'N/A'}
            />
            <CardInfos
              type="Glucides"
              value={data?.getKeyData()?.carbohydrateCount ?? 'N/A'}
            />
            <CardInfos
              type="Lipides"
              value={data?.getKeyData()?.lipidCount ?? 'N/A'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
