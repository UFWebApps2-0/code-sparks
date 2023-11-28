// this works on the View button that creates a pop up box for 
// additional information that did not fit in the table

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
        open={visible}
        onCancel={handleCancel}
        footer={[
          <Button key='ok' type='primary' onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        
        <div id='modal-lessons-card-header'>
          <h1 id='lessons-card-title'>{lesson.name}</h1>
        </div>
        <div id='modal-card-content-container'>
        <div id='description-container'>
        <p id='label'>Lesson Expectations:</p>
          <p id='label-info'>{lessons.expectations}</p>
        </div>
        <div id='description-container'>
        <p id='label'>Activities:</p>
        {lessons.activities?.map( data => {
        return( 
          <div> 
          <p id='label-info'>ID: {data.id}</p>
          <p id='label-info'>{data.description}</p>
          </div>
        )
        })}
        </div>
        </div>

      </Modal>
    </div>
  );
}
