// Pour USER_MAIN_DATA
interface UserMainData {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  todayScore?: number
  score?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

// Pour USER_ACTIVITY
interface UserActivity {
  userId: number
  sessions: Array<{
    day: string
    kilogram: number
    calories: number
  }>
}

// Pour USER_AVERAGE_SESSIONS
interface UserAverageSessions {
  userId: number
  sessions: Array<{
    day: number
    sessionLength: number
  }>
}

// Pour USER_PERFORMANCE
interface UserPerformance {
  userId: number
  kind: {
    [key: number]: string
  }
  data: Array<{
    value: number
    kind: number
  }>
}

export class User {
  mainData: UserMainData
  activityData: UserActivity
  sessionsData: UserAverageSessions
  performanceData: UserPerformance
  constructor(
    mainData: UserMainData,
    activityData: UserActivity,
    sessionsData: UserAverageSessions,
    performanceData: UserPerformance
  ) {
    this.mainData = mainData
    this.activityData = activityData
    this.sessionsData = sessionsData
    this.performanceData = performanceData
  }

  getUserInfo() {
    return {
      id: this.mainData.id,
      firstName: this.mainData.userInfos.firstName,
      lastName: this.mainData.userInfos.lastName,
      age: this.mainData.userInfos.age,
    }
  }

  getKeyData() {
    const keyData = {
      calorieCount: new Intl.NumberFormat('en-US').format(
        this.mainData.keyData.calorieCount
      ),
      proteinCount: this.mainData.keyData.proteinCount,
      carbohydrateCount: this.mainData.keyData.carbohydrateCount,
      lipidCount: this.mainData.keyData.lipidCount,
    }
    return keyData
  }

  getActivityData() {
    let sessions = []
    for (let session of this.activityData.sessions) {
      sessions.push({
        day: new Date(session.day).getDate().toString(),
        kilogram: session.kilogram,
        calories: session.calories,
      })
    }
    return sessions
  }

  getTrainingData() {
    const dayOfWeek: Record<number, string> = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    }
    let sessions = []
    for (let session of this.sessionsData.sessions) {
      sessions.push({
        day: dayOfWeek[session.day],
        sessionLength: session.sessionLength,
      })
    }
    return sessions
  }

  getPerformanceData() {
    const kind = this.performanceData.kind
    for (const value in kind) {
      switch (kind[value]) {
        case 'cardio':
          kind[value] = 'Cardio'
          break
        case 'energy':
          kind[value] = 'Energie'
          break
        case 'endurance':
          kind[value] = 'Endurance'
          break
        case 'strength':
          kind[value] = 'Force'
          break
        case 'speed':
          kind[value] = 'Vitesse'
          break
        case 'intensity':
          kind[value] = 'Intensité'
          break
        default:
          console.log(`Sorry, we are out of data.`)
      }
    }
    let performances = []
    for (let performance of this.performanceData.data) {
      performances.push({
        value: performance.value,
        kind: kind[performance.kind],
      })
    }
    return performances
  }

  getScore() {
    const score = this.mainData.todayScore ?? this.mainData.score ?? 0
    const scoreData = [
      {
        name: 'score',
        value: score,
      },
      {
        name: 'empty',
        value: 1 - score,
      },
    ]
    return scoreData
  }
}
