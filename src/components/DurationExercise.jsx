import { useState, useEffect } from "react";

export default function DurationExercise({ name, suggested, onGoHome, onGoToExercise }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
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
    <div className="container">
      <h1>{name}</h1>
      <p className="timer">{formatTime()}</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
      <button onClick={onGoHome}>Home</button>
      <button onClick={() => onGoToExercise(suggested)}>Suggested: {suggested}</button>
    </div>
  );
}
