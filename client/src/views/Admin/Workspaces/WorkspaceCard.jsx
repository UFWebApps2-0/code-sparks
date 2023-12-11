import React from 'react';
import Card from 'react-bootstrap/Card';

// this file is perhaps unnecessary but is how I displayed the data for each classroom / organization so I did the same here
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