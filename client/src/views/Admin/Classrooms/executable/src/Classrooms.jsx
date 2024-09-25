import './Classrooms.css';
import React, { useEffect, useState } from 'react';
import { getAllClassrooms } from '../../../../../Utils/requests'; // connects to strapi database
import ClassroomCard from './ClassroomCard';
import NavBar from "../../../../../components/NavBar/NavBar"
import Sidebar from "../../../Components/Sidebar"
import { message } from 'antd'; // Import message from Ant Design

function Classrooms() {
  const [classrooms, setClassrooms] = useState([]); // stores classrooms data from strapi using useState
  const [newStudentName, setNewStudentName] = useState('');

  useEffect(() => {
    const fetchData = async () => { // asynchronous function which calls the get function imported for classrooms
      try {
        const res = await getAllClassrooms();
        console.log(res);
        if (res.data) {
          setClassrooms(res.data);
          console.log(res.data);
        } else {
          message.error(res.err);
        }
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    };
    fetchData();
  }, []);

  const addStudentName = (classroomId) => {
    if (newStudentName.trim() !== '') {
      setClassrooms((prevClassrooms) => {
        const updatedClassrooms = [...prevClassrooms];
        const classroomIndex = updatedClassrooms.findIndex((c) => c.id === classroomId);
        const updatedStudents = [...updatedClassrooms[classroomIndex].students, { name: newStudentName }];
        updatedClassrooms[classroomIndex] = { ...updatedClassrooms[classroomIndex], students: updatedStudents };
        return updatedClassrooms;
      });
      setNewStudentName('');
    }
  };

  const removeStudentName = (classroomId, studentName) => {
    setClassrooms((prevClassrooms) => {
      const updatedClassrooms = [...prevClassrooms];
      const classroomIndex = updatedClassrooms.findIndex((c) => c.id === classroomId);
      
      if (classroomIndex !== -1) {
        const updatedStudents = updatedClassrooms[classroomIndex].students.filter(
          (student) => student.name !== studentName
        );
  
        updatedClassrooms[classroomIndex] = {
          ...updatedClassrooms[classroomIndex],
          students: updatedStudents,
        };
      }
  
      return updatedClassrooms;
    });
  };
  // In the return statement, first it displays the header and then uses a map to iterate through each classroom and call the card 
  // file to display its contents
  return (
    <div className="container nav-padding">
      <NavBar />
      <h1 className='text-left'> List of Classrooms</h1>
      {classrooms.map((classroom) => (
        <div key={classroom.id} className="mb-3">
          <ClassroomCard classroom={classroom} />
          <div>
            <input
              type="text"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
            />
            <button onClick={() => addStudentName(classroom.id)}>Add Student</button>
          </div>
          <div>
            <button onClick={() => removeStudentName(classroom.id, student.id)}>Remove Student</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Classrooms;
