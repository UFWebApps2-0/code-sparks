import React, {useEffect, useState} from 'react';
import NavBar from "../../../components/NavBar/NavBar";
import './TeacherProfile.less';
import default_profile from '../../../assets/default.png';
import { getMentor} from '../../../Utils/requests';
import Profile from './TeacherProfilePic';


export default function TeacherProfile() {
  const [profilepicture, loadProfile] = useState(default_profile);

useEffect(() => {
  const fetchData = async () => {
    try {
      const teacher_profile = await getMentor();
      loadProfile(teacher_profile.data.profile_picture);
     } catch {}
  };
  fetchData();
}, []);

  return (
    <div className="container nav-padding">
      <NavBar />
      <div>
        <div className = "teacher_styling" >
          <img className="profile_picture_styling" src={profilepicture} alt="Profile" />
         
        </div> 
        <div className="update">
        <Profile />
        </div>
        
      </div>

    </div>
    
    
  )
}
