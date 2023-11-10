import React from 'react'
import ReactDOM from 'react-dom/client'
import Classrooms from './Classrooms.jsx'
import './index.css'
import './Classrooms.css'
import './classroomsData.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Classrooms />
  </React.StrictMode>,
)
