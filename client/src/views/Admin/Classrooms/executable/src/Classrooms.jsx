/* this is my .jsx file for the classrooms page; it runs successfully if you change directory to ./Sapphire-Project12-4f\client\src\views\Admin\Classrooms\executable then type npm run dev into the terminal. */
import './Classrooms.css';
import classes from './classroomsData.json'

function Classrooms() {
  
  return(
    <div>
      <h1 className="classrooms-header">Classrooms</h1>
      <div className="App">
      
      {
        classes && classes.map( course => {
          return(
             <div className="box" key={ course.id }>
              <strong>{ course.courseName }</strong>
              <div>Teacher: { course.teacher.firstName } { course.teacher.lastName}</div>
              <div>Number of Students: { course.students.length }</div>
               {course.students.map( data => {
                return( 
                  <div key={course.key}>
                  { data.firstName } { data.lastName }
                  </div>
                )
               })}
               <br />
             </div>
          )
        })
      }

      </div>
    </div>
  );
}

export default Classrooms;

