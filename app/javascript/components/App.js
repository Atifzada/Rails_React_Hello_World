// app/javascript/components/App.js

import React from 'react';
import Greeting from '../components/Greeting';

const App = () => (
  <div>
    <h1 className="text-2xl text-red-600 text-center w-full">Welcome to Greetings App!</h1>
    <Greeting />
  </div>
);

export default App;
