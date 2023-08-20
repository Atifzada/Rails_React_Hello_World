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
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Greetings:</h2>
      <p className="text-gray-600">{greeting}</p>
    </div>

  );
};

export default Greeting;
