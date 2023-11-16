import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import Sidebar from "./Components/Sidebar"
import EditButtons from "./Components/EditButtons"
import TeacherList from "./TeacherList"
import "./Admin.less"

export default function Admin(props) {
  return (
    <div className="container nav-padding">
      <NavBar />
      <h1>Welcome Admin!</h1>
      <Sidebar/>
      <div className="text-left">
        <EditButtons/>
      </div>
    </div>
  )
}