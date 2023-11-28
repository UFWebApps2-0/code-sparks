import './Classrooms.css';
import React, { useEffect, useState } from 'react';
import { getAllClassrooms } from '../../../../../Utils/requests';
import NavBar from "../../../../../components/NavBar/NavBar"
import Sidebar from "../../../Components/Sidebar"
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Classrooms() {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllClassrooms();
        console.log(res);
        if (res.data) {
          setClassrooms(res.data);
          console.log(res.data);
        } else {
          message.error(res.err);
        }
      } catch {}
    };
    fetchData();
  }, []);

  return(
    <div>
      <div className="container nav-padding">
      <NavBar /> <Sidebar/>
      <Tabs defaultActiveKey="home">
          <TabPane tab="Classroom List" key="roster">
      <h1 className="classrooms-header">Classrooms</h1>
      <div className="App">
        {  classrooms.map (course => {
            return( 
              <div key={course.key}>
              <div>Classroom Name: {course.name} </div>
              <div>Classroom ID: {course.id} </div>
              <div>Course Code: {course.code} </div>
              <div>Mentors: </div>
              {course.mentors.map( mentor => {
                return( 
                  <div key={mentor.key}>
                  { mentor.first_name } { mentor.last_name }
                  </div>
                )
              })}
              <div>Number of Students: {course.students.length} </div>
              {course.students.map( student => {
                return( 
                  <div key={student.key}>
                  { student.name }
                  </div>
                )
              })}
              <div>Number of Sessions: {course.sessions.length} </div>
              {course.sessions.map( session => {
                return( 
                  <div key={session.key}>
                  { session.id }
                  </div>
                )
              })}

              <br />
              </div>
            )
          })}
       {
      }
      </div>
          </TabPane>
        </Tabs>
      </div>
      </div>
  );
}

export default Classrooms;