import { useState } from "react";

export default function RepetitionExercise({ name, suggested, onGoHome, onGoToExercise }) {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{name}</h1>
      <p className="counter">{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={onGoHome}>Home</button>
      <button onClick={() => onGoToExercise(suggested)}>Suggested: {suggested}</button>
    </div>
  );
}
