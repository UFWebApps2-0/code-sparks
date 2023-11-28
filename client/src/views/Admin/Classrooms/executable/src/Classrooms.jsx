/* this is my .jsx file i developed on my own for the Classrooms list page, which I made slight variations to for the Organizations list page and for the Teachers list page. */
import './Classrooms.css';
/* Here I import my mock data from a .json file I created to use for testing purposes. I was only able to develop the code for the classrooms, organizations, and teachers list pages this sprint so I did not 
implement the strapi data as I was limited by time constraints. */
import classes from './classroomsData.json'

function Classrooms() {
  /* this section is where I stored the classrooms data from my json file into 'course', using a map and the key values I used to tie each classroom and its course name, teacher name, and array of students
  into each classroom. I then use the two maps to iterate through each classroom, print the course name, teacher name, then using the second map print the number of students, then iterate through each student
  and print each of their names. I used <strong></strong>, <div>/<div>, and <br > to control the spacing. Also, I made adjustments to the index.html file to center the display and change the font. */
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

