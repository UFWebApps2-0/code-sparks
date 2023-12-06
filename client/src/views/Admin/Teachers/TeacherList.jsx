import './lessons.css';
import './Roster/Roster.less'
import NavBar from "../../../components/NavBar/NavBar"
import Sidebar from ".././Components/Sidebar"
import Roster from "./Roster/Roster"
import AddTeacherForm from "../Teachers/Roster/AddTeacherForm"
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function TeacherList() {
  return(
    <div>
      <div className="container nav-padding">
      <NavBar /> <Sidebar/>
      <Tabs defaultActiveKey="home">
          <TabPane tab="Teacher List" key="roster">
            <Roster/>
          </TabPane>
          <TabPane tab="Add Teacher" key="Add teacher">
            <AddTeacherForm/>
          </TabPane>
        </Tabs>
      </div>
      </div>
  );
}
export default TeacherList;
// import React, { useEffect, useState } from 'react';
// import { getTeachers } from '../../../Utils/requests';
// import TeacherCard from './TeacherCard';
// import NavBar from '../../../components/NavBar/NavBar';
// function TeacherList() {
//     //variable to hold all the teachers info
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         //variable to hold the json file returned by getTeachers
//         const res = await getTeachers();
//         if (res.data) {
//           setTeachers(res.data);//setting teachers variable to be res.data
//         } else {
//           console.error(res.err);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container nav-padding">
//         <NavBar/>
//         <h1 className='text-left'> List of Teachers</h1>
//       {teachers.map((teacher) => (
//         <div key={teacher.id} className="mb-3">
//           <TeacherCard teacher={teacher} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TeacherList;