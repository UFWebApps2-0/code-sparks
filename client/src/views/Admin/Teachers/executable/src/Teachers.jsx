/* this is my .jsx file for the classrooms page; it runs successfully if you change directory to ./Sapphire-Project12-4f\client\src\views\Admin\Classrooms\executable then type npm run dev into the terminal. */
import './Teachers.css';
import teachers from './teachersData.json'

function Teachers() {
  
  return(
    <div>
      <h1 className="teachers-header">Teachers</h1>
      <div className="App">
      
      {
        teachers && teachers.map( course => {
          return(
             <div className="box" key={ course.id }>
              <strong>{ course.teacher.firstName } { course.teacher.lastName}</strong>
              <div>Classes: { course.courseName }</div>
              <div>Number of Students: { course.students.length }</div>
               <br />
             </div>
          )
        })
      }

      </div>
    </div>
  );
}

export default Teachers;

