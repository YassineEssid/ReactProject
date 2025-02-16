import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import "./Event.css"; 

const Event = (props) => {
  const [nbTickets, setNbTickets] = useState(props.e.nbTickets);
  const [nbParticipants, setNbParticipants] = useState(props.e.nbParticipants);
  const [message, setMessage] = useState("");
  const [liked, setLiked] = useState(props.e.like);

  const handleBook = () => {
    if (nbTickets > 0) {
      setNbParticipants(nbParticipants + 1);
      setNbTickets(nbTickets - 1);
      setMessage("reservation avec succes !");

      setTimeout(() => setMessage(""), 2000);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card className="event-card">
      <Card.Img variant="top" src={props.e.img} alt={props.e.name} onError={(e) => { e.target.src = "/assets/event3.png"; }} />
      <Card.Body>
        <Card.Title>{props.e.name}</Card.Title>
        <Card.Text>{props.e.description}</Card.Text>
        <Card.Text> Prix: {props.e.price} DT</Card.Text>
        <Card.Text> Tickets restants: {nbTickets}</Card.Text>
        <Card.Text> Participants: {nbParticipants}</Card.Text>

        <Button variant="primary" onClick={handleBook} disabled={nbTickets === 0} className="me-2">
          {nbTickets === 0 ? "Sold Out" : " Book an event"}
        </Button>

        <Button variant={liked ? "danger" : "secondary"} onClick={toggleLike}>
          {liked ? "👎 Dislike" : "👍 Like"}
        </Button>

        {message && <Alert variant="success" className="mt-2">{message}</Alert>}
      </Card.Body>
    </Card>
  );
};

export default Event;
