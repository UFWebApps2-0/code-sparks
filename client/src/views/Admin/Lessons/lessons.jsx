import './lessons.css';
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
  );
}

export default Lessons;

