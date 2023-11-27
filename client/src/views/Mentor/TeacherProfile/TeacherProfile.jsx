import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import './TeacherProfile.less';
import default_profile from '../../../assets/default.png';
import { getMentor} from '../../../Utils/requests';
import Profile from './ProfilePic';

//gets the current signed in user to get their profile picture
let teacher_profile_picture = default_profile;
let teacher_profile = await getMentor();

// function submitForm(form){
//   form.preventDefault();
//   alert("hello world");
//   console.log("this works");
//   console.log(form.filename);
// }

export default function TeacherProfile(props) {
  //try catch at some point?
  teacher_profile_picture = teacher_profile.data.profile_picture;
  
  return (
    <div className="container nav-padding">
      <NavBar />
      <Profile />
      <div>
        <div className = "teacher_styling" >
          <img className="profile_picture_styling" src={teacher_profile_picture} alt="Profile Picture" />
          
        </div>   
         
        
        <div className = " teacher_styling teacher_buttons">
          <h1>Challenge View</h1>
          </div>
        <div className = "teacher_styling teacher_buttons">
         <h1>Create New Assignment</h1>
        </div>
      </div>

    </div>
    
    
  )
}
