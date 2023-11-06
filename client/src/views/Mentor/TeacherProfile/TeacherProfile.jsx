import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import './TeacherProfile.less';
import Logo from '../../../assets/default.png';
import { getToken} from '../../../Utils/AuthRequests';
import { getCurrUser} from '../../../Utils/userState';
import { getMentor} from '../../../Utils/requests';

console.log(getCurrUser());

export default function TeacherProfile(props) {


  return (
    <div className="container nav-padding">
      <NavBar />
      <div>
        <div class = "teacher_styling" >
          <img class="profile_picture_styling" src={Logo} alt="Profile Picture" />
        </div> 
        <div class = " teacher_styling teacher_buttons">
          <h1>Challenge View</h1>
          </div>
        <div class = "teacher_styling teacher_buttons">
         <h1>Create New Assignment</h1>
        </div>
      </div>

    </div>
    
  )
}
