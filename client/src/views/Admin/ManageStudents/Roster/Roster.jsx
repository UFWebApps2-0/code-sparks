// imported and edited this from '/Mentor/Classroom/Roster'

import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../../../../Utils/requests';
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

  const handleBack = () => {
    navigate('/admin');
  };

  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <MentorSubHeader
        title={'Students'}
      />
      <ListView students={students} />
    </div>
  );
}
