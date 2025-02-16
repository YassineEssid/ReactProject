import React from 'react';
import Event from './Event';
import db from './db.json';
import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => setEvents(data));

        setTimeout(() => setShowWelcome(false), 3000);
    }, []);

    return (
        <div>
            {showWelcome && <Alert variant="info">Welcome to our Platform!</Alert>}
            <h1>Nos Events</h1>
            {db.map((e,index)=> <Event key={index} e={e}/>)}
        </div>
    );
};

export default Events;
