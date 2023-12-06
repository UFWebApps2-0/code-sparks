// imported and edited this from '/Mentor/Classroom/Roster'

import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent } from '../../../../Utils/requests';
import MentorSubHeader from '../../../../components/MentorSubHeader/MentorSubHeader';
import './Roster.less';
import ListView from './ListView';
import { useNavigate } from 'react-router-dom';

export default function Roster() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //variable to hold the json file returned by getAllStudents
        const res = await getAllStudents();
        console.log(res);
        if (res.data) {
          setStudents(res.data);//setting students variable to be res.data
        } else {
          console.error(res.err);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const addStudentToTable = (student) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      ...student.map((studentinfo) => ({
        key: studentinfo.id,
        name: studentinfo.name,
        expectations: studentinfo.expectations,
      })),
    ]);
  };

  const handleBack = () => {
    navigate('/admin');
  };
  const handleDelete = async (record) => {
    if (record && record.id) {
      const studentId = record.id;
      const res = await deleteStudent(studentId);
      if (res.data) {
        message.success(`${record.name} has been deleted successfully.`);
        setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== record.id)
      );
      } else {
        message.error(res.err);
      }
    } else {
      message.error('An error occurred while deleting the student:', error);
    }
  };
  

  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <MentorSubHeader
        title={'Students'}
        addStudentToTable={addStudentToTable}
      />
      <ListView students={students}
      handleDelete={handleDelete} />
    </div>
  );
}
