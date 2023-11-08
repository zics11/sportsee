import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/style/index.css'
import Home from './pages/Home'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
)
