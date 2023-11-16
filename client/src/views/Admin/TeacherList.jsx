import React, { useEffect, useState } from 'react';
import { getTeachers } from '../../Utils/requests';
import TeacherCard from './TeacherCard';
import NavBar from '../../components/NavBar/NavBar';


function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTeachers();
        if (res.data) {
          setTeachers(res.data);
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
    <div>
        <NavBar/>
        <h1> List of Teachers</h1>
      {teachers.map((teacher) => (
        <div key={teacher.id} className="mb-3">
          <TeacherCard teacher={teacher} />
        </div>
      ))}
    </div>
  );
}

export default TeacherList;