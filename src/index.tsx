import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './utils/style/index.css'
import Home from './pages/Home'
import UserInfo from './pages/UserInfo'
import Activity from './pages/Activity'


import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div className="h-screen  min-h-[780px] min-w-[1024px]">
      <Router>
        <Header />
        <Routes>
          <Route path="/home/user/:id" element={<Home />}></Route>
          <Route path="/user/:id" element={<UserInfo />}></Route>
          <Route path="/user/:id/activity" element={<Activity />}></Route>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
)
