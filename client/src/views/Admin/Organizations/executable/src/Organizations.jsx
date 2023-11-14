/* this is my .jsx file i developed on my own for the Organizations list page, a lot of which I reused from my Classrooms.jsx file. I did not give anyone permission to directly copy significant portions 
from this code without letting me know first. */
import './Organizations.css';
/* here I imported my mock data (which is identical to the data on strapi, but still created by me in a json file) for organizations into the organizations variable for later use */
import organizations from './organizationsData.json'

function Organizations() {
  /* in this file I used a total of three maps to first iterate through each organization, then separately iterate through its array of classrooms, then its array of mentors. The first element i output is 
  the 'Organizations' header, then for each organization I display its name, county, and state. Then i use the second map to store each organizations array of classrooms into the 'data' variable and display 
  each one. I do the same thing for the array of mentors as well. I used <strong></strong>, <div>/<div>, and <br > to control the spacing. Also, I made adjustments to the index.html file to center the
  display and change the font. */
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

