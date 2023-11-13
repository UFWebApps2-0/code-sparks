import React from 'react'
import ReactDOM from 'react-dom/client'
import Lessons from './lessons.jsx'
import './index.css'
import './lessons.css'
import './lessonData.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Lessons />
  </React.StrictMode>,
)
