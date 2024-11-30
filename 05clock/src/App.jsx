// src/Clock.js
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '24px', marginTop: '50px' }}>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
