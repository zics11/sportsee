import { useEffect } from 'react'
import { useFetch } from '../../utils/hooks/fetch'

// Ce type représente le type interne de l'objet de réponse.
type User = {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  score: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

function Home() {
  const {
    data: mainData,
    isLoading: isMainLoading,
    error: mainError,
  } = useFetch(
    'http://localhost:3000/user/${userId}', 
    '',
    12
  )

  const {
    data: activityData,
    isLoading: isActivityLoading,
    error: activityError,
  } = useFetch(
    'http://localhost:3000/user/${userId}/activity', 
    '',
    12
  )

  const {
    data: sessionsData,
    isLoading: isSessionsLoading,
    error: sessionsError,
  } = useFetch(
    'http://localhost:3000/user/${userId}/average-sessions', 
    '',
    12
  )

  const {
    data: performanceData,
    isLoading: isPerformanceLoading,
    error: performanceError,
  } = useFetch(
    'http://localhost:3000/user/${userId}/performance', 
    '',
    12
  )
  console.log('activityData', activityData)

  return (
    <div className="text-blue-600 w-96 h-14 bg-black text-center text-5xl">
      ID de l'utilisateur :
    </div>
  )
}

export default Home
