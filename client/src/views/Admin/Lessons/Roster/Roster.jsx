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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getLessonModuleAll();
  //       console.log(res);
  //       if (res.data) {
  //         setLessons(res.data);
  //       } else {
  //         message.error(res.err);
  //       }
  //     } catch {}
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    let data = [];
    getLessonModuleAll().then((res) => {
      if (res.data) {
        const lessonmodule = res.data;
        setLessons(lessonmodule);
        lessonmodule.unit.forEach((lesson_unit) => {
          data.push({
            key: lesson_unit.id,
            name: lesson_unit.name,
            grade: lesson_unit.grade,
            number: lesson_unit.number,
          });
        });
        lessonmodule.activities.forEach((activity) => {
          data.push({
            key: activity.id,
            lesson_module: activity.lesson_module,
            number: activity.number,
          });
        });
        setLessons(data);
      } else {
        message.error(res.err);
      }
    }).catch((error) => {
      console.error("Error fetching lesson module data:", error);
    });
  }, []);

  // {
  //   "number": 0,
  //   "name": "string",
  //   "expectations": "string",
  //   "activities": [
  //     "string"
  //   ],
  //   "unit": "string",
  //   "standards": "string",
  //   "link": "string",
  //   "created_by": "string",
  //   "updated_by": "string"
  // }

  // UPDATE THIS
  // const addLessonToTable = (lesson) => {
  //   let newLessonData = [...lessons];
  //   lesson.forEach((lessonmodule) =>
  //   newLessonData.push({
  //       key: lessonmodule.id,
  //       name: lessonmodule.name,
  //       expectations: lessonmodule.expectations,
  //     })
  //   );
  //   setLessons(newLessonData);
  // };

  const addLessonToTable = (lesson) => {
    setLessons((prevLessons) => [
      ...prevLessons,
      ...lesson.map((lessonmodule) => ({
        key: lessonmodule.id,
        name: lessonmodule.name,
        expectations: lessonmodule.expectations,
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
