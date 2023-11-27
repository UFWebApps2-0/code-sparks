import './lessons.css';
import './Roster/Roster.less'
import React, { useEffect, useState } from 'react';
import { getLessonModuleAll } from '../../../Utils/requests';
import NavBar from "../../../components/NavBar/NavBar"
import Sidebar from ".././Components/Sidebar"
import Roster from "./Roster/Roster"
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Lessons() {
  const [lessons, setLessons] = useState([]);

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

  return(
    
    <div>
      <div className="container nav-padding">
      <NavBar /> <Sidebar/>

      <Tabs defaultActiveKey="home">

          <TabPane tab="Lesson List" key="roster">
            <Roster/>
          </TabPane>
        </Tabs>

      </div>
      </div>
      
  );
}



export default Lessons;
