import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import Sidebar from "./Components/Sidebar"
import EditButtons from "./Components/EditButtons"
import "./Admin.less"

export default function Admin(props) {
  return (
    <div className="container nav-padding">
      <NavBar />
      <h1 className="welcome-message">Welcome Admin!</h1>
      <Sidebar/>
      <div className="text-left">
        <EditButtons/>
      </div>
    </div>
  )
}