// this works on the View button that creates a pop up box for 
// additional information that did not fit in the table

import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getTeacher } from '../../../../Utils/requests';

export default function LessonModal({ linkBtn, teacher }) {
  const [visible, setVisible] = useState(false);
  const [classes, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTeacher(teacher.id);
        console.log(res);
        if (res.data) {
          setClassrooms(res.data);
          console.log(res);
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
        ]}>       
        <div id='modal-lessons-card-header'>
          <h1 id='lessons-card-title'>{classes.last_name}'s Classes</h1>
        </div>
        <div id='modal-card-content-container'>
        <div id='description-container'>
        <p id='label'>Classrooms:</p>
        {classes.classrooms?.map( data => {
        return( 
          <div> 
          <p id='label-info'> {data.name}</p>
          <p id='label-info'>ID: {data.id}</p>
          <p id='label-info'>Code: {data.code}</p>
          <p id='label-info'>Grade: {data.grade}</p>
          </div>
        )
        })}
        </div>
        </div>
      </Modal>
    </div>
  );
}
