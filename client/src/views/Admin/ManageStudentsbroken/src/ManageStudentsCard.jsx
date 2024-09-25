import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function ManageStudentsCard({ classItem }) {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (studentId) => {
    setShowDetails((prevShowDetails) => ({
      ...prevShowDetails,
      [studentId]: !prevShowDetails[studentId],
    }));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{classItem.name}</Card.Title>
        <Card.Text>Classroom ID: {classItem.id}</Card.Text>
        <Card.Text>
          <strong>Student Roster:</strong>
          <div>
            {classItem.students &&
              classItem.students.map((student) => (
                <div key={student.id}>
                  <div>
                    {student.first_name} {student.last_name}
                    {showDetails[student.id] && (
                      <span>
                        <br />
                        ID: {student.id} | Character: {student.character}
                      </span>
                    )}
                  </div>
                  <div>
                    <button onClick={() => toggleDetails(student.id)}>
                      {showDetails[student.id] ? 'View Less' : 'View More'}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ManageStudentsCard;
