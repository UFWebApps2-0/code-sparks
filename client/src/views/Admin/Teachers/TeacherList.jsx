import React, { useEffect, useState } from 'react';
import { getTeachers } from '../../../Utils/requests';
import TeacherCard from './TeacherCard';
import NavBar from '../../../components/NavBar/NavBar';


function TeacherList() {
    //variable to hold all the teachers info
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //variable to hold the json file returned by getTeachers
        const res = await getTeachers();
        if (res.data) {
          setTeachers(res.data);//setting teachers variable to be res.data
        } else {
          console.error(res.err);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container nav-padding">
        <NavBar/>
        <h1 className='text-left'> List of Teachers</h1>
      {teachers.map((teacher) => (
        <div key={teacher.id} className="mb-3">
          <TeacherCard teacher={teacher} />
        </div>
      ))}
    </div>
  );
}

export default TeacherList;