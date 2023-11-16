import React from 'react';
import Card from 'react-bootstrap/Card';

function TeacherCard({ teacher }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{teacher.first_name} {teacher.last_name}</Card.Title>
        <Card.Text>
          Email: {teacher.user.email}
        </Card.Text>
        <Card.Text>
          <strong>Classrooms:</strong>
          <ul>
            {teacher.classrooms && teacher.classrooms.map((classroom) => (
              <li key={classroom.id}>
                {classroom.name} - Grade {classroom.grade}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeacherCard;