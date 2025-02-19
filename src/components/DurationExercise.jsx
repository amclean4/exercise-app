import { useState, useEffect } from "react";

export default function DurationExercise({ name, onGoHome }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime(prev => prev + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{formatTime()}</p>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button onClick={() => setIsRunning(false)}>stop</button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>reset</button>
      <button onClick={onGoHome}>home</button>
    </div>
  );
}