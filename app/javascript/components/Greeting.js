// app/javascript/components/Greeting.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    axios.get('/greetings/random')
      .then((response) => {
        setGreeting(response.data.greeting);
      })
      .catch((error) => {
        console.error('Error fetching greeting:', error);
      });
  }, []);

  return (
    <div>
      <h2>Greetings:</h2>
      <p>{greeting}</p>
    </div>

  );
};

export default Greeting;
