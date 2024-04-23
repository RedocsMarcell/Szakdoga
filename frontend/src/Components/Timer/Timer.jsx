import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = ({ minutes_base, seconds_base, handleTimer }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(60);
  let timer;

  useEffect(() => {

    handleTimer(minutes,seconds);
  }, [minutes,seconds]);

  useEffect(() => {
    timer = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
        return;
      }

      if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  useEffect(() => {
    if (minutes_base>0) 
    {
      setMinutes(minutes_base);
       setSeconds(seconds_base);
    }
    else
    {
      setMinutes(60);
       setSeconds(0);
    }
    
  }, [minutes_base, seconds_base]);

  return (
    <div className='timer'>
      
        <div className='timer_container'>
          <h1>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</h1>
        </div>
    
    </div>
  );
};

export default Timer;
