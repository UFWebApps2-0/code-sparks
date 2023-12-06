import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAuthorizedWorkspaces } from '../../../../Utils/requests';

export default function LessonModal({ linkBtn, workspace }) {
  const [visible, setVisible] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAuthorizedWorkspaces(workspace.id);
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
          <h1 id='lessons-card-title'>{workspaces.name}Details</h1>
        </div>
        <div id='modal-card-content-container'>

        </div>
      </Modal>
    </div>
  );
}