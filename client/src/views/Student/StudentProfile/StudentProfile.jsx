import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import './StudentProfile.less';
import Logo from '../../../assets/default.png';//
import { getStudents } from '../../../Utils/requests';
import { getStudent } from '../../../Utils/requests';
import { getCurrentStudent } from '../../../Utils/requests';


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
