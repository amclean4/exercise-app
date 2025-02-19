import { useState } from "react";

export default function RepetitionExercise({ name, onGoHome }) {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{name}</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={onGoHome}>home</button>
    </div>
  );
}