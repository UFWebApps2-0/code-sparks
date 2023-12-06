import React from 'react';
import Card from 'react-bootstrap/Card';

function OrganizationCard({ organization }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{organization.name} </Card.Title>
        <Card.Text>
          Organization ID: {organization.id}
        </Card.Text>
        <Card.Text>
        <div>County, State: {organization.county},  {organization.state} </div>
              <strong>Mentors: </strong>
              {organization.mentors.map( mentor => {
                return( 
                  <div key={mentor.key}>
                  { mentor.first_name } { mentor.last_name }
                  </div>
                )
              })}
              <strong>Number of Classrooms: {organization.classrooms.length} </strong>
              {organization.classrooms.map( classroom => {
                return( 
                  <div key={classroom.key}>
                  { classroom.name }
                  </div>
                )
              })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OrganizationCard;