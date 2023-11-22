/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from 'react-router-dom'
import { ReactComponentElement } from 'react'

function Acceuil() {
  return (
    <section className="  flex flex-row w-full justify-center p-20 gap-11">
      <div className=" flex flex-col items-center  bg-gris-chart p-11">
        <h2 className="text-5xl font-medium text-red-SportSee ">Karl</h2>
        <br />
        <NavLink to="/user/12/home">→ Dashboard</NavLink>
        <NavLink to="/user/12">→ UserInfo</NavLink>
        <NavLink to="/user/12/activity">→ Activity</NavLink>
        <NavLink to="/user/12/average-sessions">→ AverageSessions</NavLink>
        <NavLink to="/user/12/performance">→ Performance</NavLink>
      </div>
      <div className=" flex flex-col items-center  bg-gris-chart p-11">
        <h2 className="text-5xl font-medium text-red-SportSee ">Cecilia</h2>
        <br />
        <NavLink to="/user/18/home">→ Dashboard</NavLink>
        <NavLink to="/user/18">→ UserInfo</NavLink>
        <NavLink to="/user/18/activity">→ Activity</NavLink>
        <NavLink to="/user/18/average-sessions">→ AverageSessions</NavLink>
        <NavLink to="/user/18/performance">→ Performance</NavLink>
      </div>
    </section>
  )
}

export default Acceuil
