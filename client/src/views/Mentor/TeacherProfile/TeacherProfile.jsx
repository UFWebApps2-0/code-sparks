import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import './TeacherProfile.less';
import Logo from '../../../assets/default.png';

//container for teacher profile, no functionality currently - placeholder div
export default function TeacherProfile(props) {
  return (
    <div className="container nav-padding">
      <NavBar />
      <div>
      <img class="profile_picture_styling"src={Logo} alt="Profile Picture" />
      </div> 
      
    <div>
   
    </div>
    </div>
    
  )
}
