import './lessons.css';
import React, { useEffect, useState } from 'react';
import { getLessonModuleAll } from '../../../../Utils/requests';

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
      <h1 className="title">Lesson Modules</h1>
        <div>

        {lessons.map( module => {
          return (
            <div className="card">

              <strong>{ module.name }</strong>
              <div> Lesson ID: {module.id} </div>
              <div> Expectations: {module.expectations} </div>

              <br></br> <div> Unit: {module.unit.name} </div>
              <div> Unit ID: {module.unit.id} </div>
              <div> Grade: {module.unit.grade} </div>
              <div> Standards: {module.unit.standards_id} - {module.unit.standards_description} </div>
              
              <br></br><div> Activities</div>
              {module.activities.map( data => {
                return( 
                  <div>
                    <div key={module.key}> Activity {data.number} ID: { data.id }</div>
                    <div> Activity Description: {data.description} </div>
                  </div>
                )
              })}

            </div> 
            
          )
          
          })}
        </div>
      </div>
      
  );
}

export default Lessons;
