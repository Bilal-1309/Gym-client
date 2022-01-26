import React, { useEffect, useState } from 'react';
import { getRemainingTimeUntil } from './Utils';

const defaultTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00"
}

const Timer = ({timestampMs}) => {
  const [time, setTime] = useState(defaultTime);

  useEffect(()=> {
    const intervalId = setInterval(()=> {
      updateTime(timestampMs);
    }, 1000);
    return ()=> clearInterval(intervalId)
  }, [timestampMs])

  function updateTime(countdown) {
    setTime(getRemainingTimeUntil(countdown))
  }

  return (
    <div>
      <span>{time.days}</span>
      <span>days</span>
      <span>{time.hours}</span>
      <span>hours</span>
      <span>{time.minutes}</span>
      <span>minutes</span>
      <span>{time.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default Timer;