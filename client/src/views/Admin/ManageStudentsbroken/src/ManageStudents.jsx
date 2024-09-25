import React, { useState, useEffect } from 'react';
import './ManageStudents.css';
import { getAllClassrooms } from '../../../../Utils/requests';
import ManageStudentsCard from './ManageStudentsCard';

function ManageStudents() {
  const [classrooms, setClassrooms] = useState([]);
  const [newStudentName, setNewStudentName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllClassrooms();
        if (res.data) {
          setClassrooms(res.data);
        } else {
          console.error(res.err);
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching data.');
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

  const removeStudentName = (classroomId, studentId) => {
    setClassrooms((prevClassrooms) => {
      const updatedClassrooms = [...prevClassrooms];
      const classroomIndex = updatedClassrooms.findIndex((c) => c.id === classroomId);

      if (classroomIndex !== -1) {
        const updatedStudents = updatedClassrooms[classroomIndex].students.filter(
          (student) => student.id !== studentId
        );

        updatedClassrooms[classroomIndex] = {
          ...updatedClassrooms[classroomIndex],
          students: updatedStudents,
        };
      }

      return updatedClassrooms;
    });
  };

  return (
    <div>
      <h1 className="students-header">Manage Students</h1>

      {error && <div className="error-message">{error}</div>}

      {classrooms.map((classItem, classIndex) => (
        <div key={classIndex}>
          <ManageStudentsCard classItem={classItem} />

          <div>
            {classItem.students.map((student, studentIndex) => (
              <div key={studentIndex}>
                <div>
                  <button onClick={() => removeStudentName(classItem.id, student.id)}>
                    Remove Student
                  </button>
                  <button onClick={() => addStudentName(classItem.id)}>Add Student</button>
                  {student.name}
                  <button onClick={() => removeStudentName(classItem.id, student.id)}>
                    Remove Student
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManageStudents;
