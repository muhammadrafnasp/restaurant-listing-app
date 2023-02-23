import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div>
        <Card className="text-center">
      <Card.Header>Address</Card.Header>
      <Card.Body>
        <Card.Title>London</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Copyright © 2018 White Rabbit. All Rights Reserved</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer