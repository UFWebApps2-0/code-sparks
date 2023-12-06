import React from 'react';
import Card from 'react-bootstrap/Card';

function MangeStudentsCard({ student }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{student.first_name} {student.last_name}</Card.Title>
        <Card.Text>
          Email: {student.user.email}
        </Card.Text>
        <Card.Text>
          <strong>Classrooms:</strong>
          <ul>
            {student.classrooms && student.classrooms.map((classroom) => (
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