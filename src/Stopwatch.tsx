import { useState, useEffect } from "react";
import "./stopwatch.css";
const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);


  // Hours calculation
  // const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  // const milliseconds = time % 100;

  // Method to start and stop timer
  const startTimer = () => {
    setIsRunning(true);
  };

  /*
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };
  */

  useEffect(() => {
    if (!isRunning) {
      startTimer();
    }
    let intervalId = 0;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);
  
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default Stopwatch;
