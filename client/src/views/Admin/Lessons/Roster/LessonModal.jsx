import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getLessonModule } from '../../../../Utils/requests';

export default function LessonModal({ linkBtn, lesson }) {
  const [visible, setVisible] = useState(false);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getLessonModule(lesson.id);
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

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div>
      <button id={linkBtn ? 'link-btn' : null} onClick={showModal}>
        View
      </button>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key='ok' type='primary' onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        
        <div id='modal-student-card-header'>
          <h1 id='student-card-title'>{lesson.name}</h1>
        </div>
        <div id='modal-card-content-container'>
        <div id='description-container'>
        <p id='label'>Lesson Expectations:</p>
          <p id='label-info'>{lessons.expectations}</p>
        </div>
        <div id='description-container'>
        <p id='label'>Activities:</p>
          {/* <p id='label-info'>ID: {lessons.activities[0].id}</p> */}
          {/* <p id='label-info'>ID: {lessons.activities[1].id}</p> */}
        </div>
        </div>




      </Modal>
    </div>
  );
}
