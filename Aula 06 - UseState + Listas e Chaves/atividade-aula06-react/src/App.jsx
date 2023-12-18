import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes/index'
import './styles.css'




ReactDOM.createRoot(document.getElementById('root')).render(
       <div className='main-container'>
          <React.StrictMode>
          <Routes />
          </React.StrictMode>
       </div>

)


