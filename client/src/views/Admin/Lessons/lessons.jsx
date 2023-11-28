import './lessons.css';
<<<<<<< HEAD
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
      
=======
import lessons from './lessonData.json'

function Lessons() {
    
  return(
    <div>
      <h1 className="lessons-header">Lesson Modules</h1>
      <div className="App">
      {
        lessons && lessons.map( module => {
          return(
             <div className="box" key={ module.id }>
              <strong>{ module.name }</strong>
              <div> Lesson ID: {module.id} </div>
              <div> Expectations: {module.expectations} </div>
              <br></br>
              {/* Module Units */}
              <div> Unit: {module.unit.name} </div>
              <div> Unit ID: {module.unit.id} </div>
              <div> Grade: {module.unit.grade} </div>
              <div> Standards: {module.unit.standards_id} - {module.unit.standards_description} </div>
              <br></br>
              {/* Module/Unit Activites */}
              <div> Activities</div>
              {module.activities.map( data => {
                return( 
                    <div key={module.key}> Activity ID: { data.id }: {data.description} </div>                )
               })}
              <br></br>
              <br></br>
             </div>
          )
        })
      }
      </div>
    </div>
>>>>>>> develop
  );
}

export default Lessons;
<<<<<<< HEAD
=======

>>>>>>> develop
