//main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'
import ManageStudents from './ManageStudents';
import './index.css'
import './ManageStudents.css';  

// Use ReactDOM.createRoot to render the ManageStudents component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ManageStudents />
  </React.StrictMode>,
);
