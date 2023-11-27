// imported and edited this from '/Mentor/Classroom/Roster'

import React, { useEffect, useState } from 'react';
import { getLessonModuleAll } from '../../../../Utils/requests';
import MentorSubHeader from '../../../../components/MentorSubHeader/MentorSubHeader';
import './Roster.less';
import ListView from './ListView';
import { useNavigate } from 'react-router-dom';

export default function Roster() {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLessonModuleAll();
        console.log(res);
        if (res.data) {
          setLessons(res.data);
        } else {
          message.error(res.err);
        }
      } catch {}
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
        title={'Lesson Modules'}
      />
      <ListView lessons={lessons} />
    </div>
  );
}
