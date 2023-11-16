import React from "react"
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import NavBar from "../../components/NavBar/NavBar"
import Sidebar from "./Components/Sidebar"
import EditButtons from "./Components/EditButtons"
import Cards from "./Components/Cards"
import "./Admin.less"

export default function Admin(props) {
  return (
    <div className="container nav-padding">
      <NavBar />
      <h1>Welcome Admin!</h1>
      <Sidebar/>
      
      {/* <div><Cards /></div>
      <div><Cards /></div>
      <div><Cards /></div> */}

      <div className="text-left">
        <EditButtons/>
      </div>
    </div>
  )
}