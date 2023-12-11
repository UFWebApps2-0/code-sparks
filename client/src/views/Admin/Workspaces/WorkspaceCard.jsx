import React from 'react';
import Card from 'react-bootstrap/Card';

function WorkspaceCard({ workspace }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{workspace.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default WorkspaceCard;