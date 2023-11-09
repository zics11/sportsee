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

  getFirstName() {
    return this.mainData.userInfos.firstName
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
        day: new Date(session.day).getDate(),
        kilogram: session.kilogram,
        calories: session.calories,
      })
    }
    return sessions
  }
}
