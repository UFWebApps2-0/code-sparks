import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import './StudentProfile.less';
import Logo from '../../../assets/default.png';//
import { getCurrUser} from '../../../Utils/userState';
//import { getTeachers} from '../../../Utils/requests';
import { getCurrUser} from '../../../Utils/userState';


export default function StudentProfile(props) {
  console.log(getCurrUser());

  return (
    <div className="container nav-padding">
      <NavBar />
      <div>
          <img class="profile_picture_styling" src={Logo} alt="Profile Picture" />
        
      </div>

    </div>
    
  )
}
