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

  const addLessonToTable = (lesson) => {
    setLessons((prevLessons) => [
      ...prevLessons,
      ...lesson.map((lessonmodule) => ({
        id: lessonmodule.id,
        name: lessonmodule.name,
        expectations: lessonmodule.expectations,
        number: lessonmodule.number,
        activities: lessonmodule.activities,
        unit: lessonmodule.unit,
        standards: lessonmodule.standards,
        link: '',
        created_by: 'Administrator', 
        updated_by: 'Administrator', 
      })),
    ]);
  };
  
  const handleBack = () => {
    navigate('/admin');
  };
  
  const handleDelete = async (record) => {
    if (record && record.id) {
      const lessonId = record.id;
      const res = await deleteLesson(lessonId);
      if (res.data) {
        message.success(`${record.name} has been deleted successfully.`);
        setLessons((prevLessons) =>
        prevLessons.filter((lesson) => lesson.id !== record.id)
      );
      } else {
        message.error(res.err);
      }
    } else {
      message.error('An error occurred while deleting the lesson:', error);
    }
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
