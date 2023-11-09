import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './utils/style/index.css'
import Home from './pages/Home'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div className="h-screen  min-h-[780px] min-w-[1024px]">
      <Router>
        <Header />
        <Routes>
          <Route path="/user/:id" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
)
