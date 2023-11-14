/* this is my (mason edwards) .jsx file i developed on my own for the Teachers list page, a lot of which I reused from my Classrooms.jsx file. I did not give anyone permission to directly copy from my code 
at any point and had this all done before 11/13. */
import './Teachers.css';
/* here I imported my mock data for teachers into the teachers variable for later use */
import teachers from './teachersData.json'

function Teachers() {
  /* in this file I used a map to iterate through the list of teachers and print their data. The first element i output is the 'Teachers' header, then I iterate through each teacher, printing each ones name,
  course name, and number of students. I used <strong></strong>, <div>/<div>, and <br > to control the spacing. Also, I made adjustments to the index.html file to center the display and change the font. */
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

