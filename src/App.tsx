import './App.css'
import Crossword from '@jaredreisinger/react-crossword';
import { useState, useEffect } from "react";
import JSConfetti from 'js-confetti'

const data = {
  across: {
    1: {
      clue: 'Ghostly greeting',
      answer: 'BOO',
      row: 1,
      col: 1,
    },
    4: {
      clue: 'Signature clue?',
      answer: 'JOHN',
      row: 2,
      col: 0,
    },
    5: {
      clue: 'Pixar Flik?',
      answer: 'ANT',
      row: 3,
      col: 1,
    },
    6: {
      clue: 'Sunday animation',
      answer: 'TOON',
      row: 4,
      col: 1,
    },
  },
  down: {
    1: {
      clue: 'Aquatic vehicle',
      answer: 'BOAT',
      row: 1,
      col: 1,
    },
    2: {
      clue: 'Expression of dismay',
      answer: 'OHNO',
      row: 1,
      col: 2,
    },
    3: {
      clue: 'Square dumpling',
      answer: 'WONTON',
      row: 0,
      col: 3,
    },
  },
}

const style = {
  highlightBackground: 'rgba(204, 229, 255, 0.6)',
  focusBackground: 'rgb(255, 128, 13)',
}

export default function App() {
  let jsConfetti: JSConfetti;
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = 0;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    jsConfetti = new JSConfetti();
    setIsRunning(false);
    jsConfetti.addConfetti();
  };
  
  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  return ( 
    <div>
      <div className="stopwatch-container">
        <p className="stopwatch-time">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
      <Crossword data={data} theme={style} onCrosswordCorrect={() => stopTimer()}/>
    </div>
  )
}
