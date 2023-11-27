import {message} from 'antd';
import React, {useEffect, useState} from 'react';
import{useNavigate} from 'react-router-dom';
import NavBar from "../../../components/NavBar/NavBar";
import './StudentProfile.less';
import {getStudentClassroom} from '../../../Utils/requests';
import { getStudent } from '../../../Utils/requests';
import {Link} from 'react-router-dom';
import { getCurrentStudent } from '../../../Utils/requests';
import Profile from './ProfilePic';

let currentStudent = await getCurrentStudent();

function StudentProfile(){

    const navigate = useNavigate();
    const studentName = localStorage.getItem('studentName');
    const [classroom, setClassroom] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await getStudentClassroom();
            setClassroom(res.data.classroom.name);
            console.log(res.data.classroom.name);
            if (res.data) {
              if (res.data.name) {
                setLessonModule(res.data.lesson_module);
              }
            } else {
              message.error(res.err);
            }
          } catch {}
        };
        fetchData();
      }, []);

    return(

        <html>
        <body id='pbody'>

       
       <div profile='profile'>
        <NavBar />  
        <Profile />
        <div className = "student_styling">
        <img className="profile_picture_styling" src={currentStudent.data.students[0].profile_picture} alt="Profile Picture" />
        
      </div>
       
       <div id='sp-header'>
       <div id= 'studentprofile-name'>{studentName}'s Profile</div>


       <div id= 'classroomShower'>
        Current Course:
       </div>

       
       <Link to="/Student">
        <div id = 'classroom'>
        {classroom}
        </div>
        </Link>

        <div id= 'badgeHeader'>
        Achievements:
        {'\n'}
        Badge0
        {'\n'}
        Badge1
        {'\n'}
        Badge2
        
        </div>

        

       </div>
       </div>
       
       </body>
        </html>
    );
}

export default StudentProfile;