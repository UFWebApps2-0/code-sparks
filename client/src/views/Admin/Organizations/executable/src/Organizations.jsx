/* this is my .jsx file for the classrooms page; it runs successfully if you change directory to ./Sapphire-Project12-4f\client\src\views\Admin\Classrooms\executable then type npm run dev into the terminal. */
import './Organizations.css';
import organizations from './organizationsData.json'

function Organizations() {
  
  return(
    <div>
      <h1 className="organizations-header">Organizations</h1>
      {
        organizations && organizations.map( org => {
          return(
             <div className="box" key={ org.id }>
              <strong>{ org.orgName }</strong>
              <div>County: { org.county } </div>
              <div>State: { org.state }</div>
              <div>Number of Classrooms: { org.classrooms.length }</div>
               {org.classrooms.map( data => {
                return( 
                  <div key={org.key}>
                  { data.classroomName } 
                  </div>
                )
               })}
               <div>Number of Mentors: { org.mentors.length }</div>
               {org.mentors.map( data => {
                return( 
                  <div key={org.key}>
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
  );
}

export default Organizations;