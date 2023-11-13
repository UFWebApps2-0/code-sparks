import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import './StudentProfile.less';
import { getCurrentStudent } from '../../../Utils/requests';

//gets the current signed in user to get their profile picture
let currentStudent = await getCurrentStudent();

export default function StudentProfile(props) {


  return (
    <div className="container nav-padding">
      <NavBar />

      <div class = "student_styling">
          <img class="profile_picture_styling" src={currentStudent.data.students[0].profile_picture} alt="Profile Picture" />
        
      </div>

    </div>
    
  )
}
