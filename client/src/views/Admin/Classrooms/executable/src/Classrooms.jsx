import './Classrooms.css';
import React, { useEffect, useState } from 'react';
import { getAllClassrooms } from '../../../../../Utils/requests';
import ClassroomCard from './ClassroomCard';
import NavBar from "../../../../../components/NavBar/NavBar"
import Sidebar from "../../../Components/Sidebar"
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Classrooms() {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllClassrooms();
        console.log(res);
        if (res.data) {
          setClassrooms(res.data);
          console.log(res.data);
        } else {
          message.error(res.err);
        }
      } catch {}
    };
    fetchData();
  }, []);

  return(
    <div className="container nav-padding">
        <NavBar/>
        <h1 className='text-left'> List of Classrooms</h1>
      {classrooms.map((classroom) => (
        <div key={classroom.id} className="mb-3">
          <ClassroomCard classroom={classroom} />
        </div>
      ))}
    </div>
  );
}

export default Classrooms;