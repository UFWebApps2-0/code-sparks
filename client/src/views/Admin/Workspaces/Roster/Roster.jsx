import React, { useEffect, useState } from 'react';
import { getAuthorizedWorkspaces } from '../../../../Utils/requests';
import MentorSubHeader from '../../../../components/MentorSubHeader/MentorSubHeader';
import './Roster.less';
import ListView from './ListView';
import { useNavigate } from 'react-router-dom';

export default function Roster() {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState([]);

  // again, this function calls the asynchronous function and stores the data in the 'workspaces' variable to be used throughout 
  // the codes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAuthorizedWorkspaces();
        console.log(res);
        if (res.data) {
            setWorkspaces(res.data);
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

  // this roster file is called by the workspaceList file to reference the listView file which defines and displays the actual data
  return (
    <div>
      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>
      <MentorSubHeader
        title={'Workspaces'}
      />
      <ListView workspaces={workspaces} />
    </div>
  );
}