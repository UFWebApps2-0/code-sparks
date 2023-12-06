// imported and edited this from '/Mentor/Classroom/Roster'

import React, { useEffect, useState } from 'react';
import { getLessonModuleAll, deleteLesson } from '../../../../Utils/requests';
import AdminSubHeader from '../../../../components/AdminSubHeader/AdminSubHeader';
import './Roster.less';
import ListView from './ListView';
import { Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Roster() {
  const [form] = Form.useForm();
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

  // UPDATE THIS
  const addLessonToTable = (lesson) => {
    let newLessonData = [...lessons];
    lesson.forEach((lessonmodule) =>
    newLessonData.push({
        key: lessonmodule.id,
        name: lessonmodule.name,
        expectations: lessonmodule.expectations,
        link: '',
        activities: [],
        unit: {
          id: lessonmodule.unit.id,
          grade: lessonmodule.unit.grade,
          number: lessonmodule.unit.number,
          name: lessonmodule.unit.name,
          standards_description: lessonmodule.unit.standards_description,
          standards_id: lessonmodule.unit.standards_id,
        },
      })
    );
    setLessons(newLessonData);
  };

  const handleDelete = async (key) => {
    const dataSource = [...lessons];
    setLessons(dataSource.filter((item) => item.key !== key));

    const res = await deleteLesson(key);
    if (res.data) {
      message.success(`Successfully deleted student, ${res.data.name}.`);
    } else {
      message.error(res.err);
    }
  };

  const handleBack = () => {
    navigate('/admin');
  };

  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <AdminSubHeader
        title={'Lesson Modules'}
        addUserActive={true}
        addLessonToTable={addLessonToTable}
      />
      <ListView 
      lessons={lessons}
      form={form}
      handleDelete={handleDelete}
      />
    </div>
  );
}
