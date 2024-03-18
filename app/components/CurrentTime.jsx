'use client'

import React, { useEffect, useState } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div className="text-3xl">{time}</div>;
}

export default CurrentTime;