// imported and edited this from '/Mentor/Classroom/Roster'

import React, { useEffect, useState } from 'react';
import { getTeachers } from '../../../../Utils/requests';
import MentorSubHeader from '../../../../components/MentorSubHeader/MentorSubHeader';
import './Roster.less';
import ListView from './ListView';
import { useNavigate } from 'react-router-dom';

export default function Roster() {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //variable to hold the json file returned by getTeachers
        const res = await getTeachers();
        console.log(res);
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

  const handleBack = () => {
    navigate('/admin');
  };

  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <MentorSubHeader
        title={'Teachers'}
      />
      <ListView teachers={teachers} />
    </div>
  );
}
