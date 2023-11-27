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

  const handleBack = () => {
    navigate('/admin');
  };

    
  return(
    
    <div>

      <div className="container nav-padding">
      <NavBar /> <Sidebar/>

      <button id='home-back-btn' onClick={handleBack}>
        <i className='fa fa-arrow-left' aria-hidden='true' />
      </button>

      <Tabs defaultActiveKey="home">
          <TabPane tab="All Lessons" key="allLessons">
            <div>
            {/* leaving this here for reference while making the table */}
            <h3 className="card">Lesson Modules</h3> 
            {lessons.map( module => {
              return (
                <div className="card">
                  <div class="card-deck">
                  <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{module.name}</h5>
                    <p class="card-text">
                    <div> Lesson ID: {module.id} </div>
                    <div> Expectations: {module.expectations} </div>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Details</h5>
                    <p class="card-text">
                    <strong>Unit</strong>
                    <div> Unit: {module.unit.name} </div>
                    <div> Unit ID: {module.unit.id} </div>
                    <div> Grade: {module.unit.grade} </div>
                    <div> Standards: {module.unit.standards_id} - {module.unit.standards_description} </div>
                    <br></br><strong>Activities</strong>
                    {module.activities.map( data => {
                    return( 
                      <div>
                        <div key={module.key}> Activity {data.number} ID: { data.id }</div>
                        <div> Activity Description: {data.description} </div>
                      </div>
                    )
                  })}

                    </p>
                  </div>
                </div>
                </div>
                </div> 

              )
              
              })}
            </div>
          </TabPane>

          <TabPane tab="List" key="roster">
            <Roster/>

          </TabPane>
        </Tabs>

      

      </div>
      </div>
      
  );
}



export default Lessons;
