import React from 'react';
import Card from 'react-bootstrap/Card';

function ClassroomCard({ classroom }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{classroom.name} </Card.Title>
        <Card.Text>
          Classroom ID: {classroom.id}
        </Card.Text>
        <Card.Text>
          <strong>Mentors:</strong>
          <div>
            {classroom.mentors && classroom.mentors.map((mentor) => (
              <div key={mentor.id}>
                {mentor.first_name} {mentor.last_name}
              </div>
            ))}
            <strong>Number of Students: {classroom.students.length} </strong>
            {classroom.students && classroom.students.map((student) => (
              <div key={student.id}>
                {student.name}
              </div>
            ))}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ClassroomCard;
