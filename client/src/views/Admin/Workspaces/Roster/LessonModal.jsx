import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAuthorizedWorkspaces } from '../../../../Utils/requests'; // fetching ascynchronous function to connect to strapi 
// database

export default function LessonModal({ linkBtn, workspace }) {
  const [visible, setVisible] = useState(false);
  const [workspaces, setWorkspaces] = useState([]); // storing strapi data for all workspaces into 'workspaces' variable using 
  // useState and asynchronous function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAuthorizedWorkspaces(workspace.id); // calling asynchronous function
        console.log(res); 
        if (res.data) {
            setWorkspaces(res.data);
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
  // below i call the modal to display the data in a table format with each column displaying a different data variable
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
        <div>{workspace.state}</div>
        <div id='modal-lessons-card-header'>
          <h1 id='lessons-card-title'>Details</h1>
        </div>
        <div id='modal-card-content-container'>
            {workspace.county} {workspace.state}
        </div>
      </Modal>
    </div>
  );
}