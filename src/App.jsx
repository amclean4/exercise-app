import { useState } from "react";
import Home from "./components/Home";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [exercise, setExercise] = useState("");

  const handleSelectExercise = (name, type) => {
    setExercise({ name, type });
    setScreen(type === "repetition" ? "repetition" : "duration");
  };

  return (
    <div className="container">
      {screen === "home" && <Home onSelectExercise={handleSelectExercise} />}
      {screen === "repetition" && (
        <RepetitionExercise name={exercise.name} onGoHome={() => setScreen("home")} />
      )}
      {screen === "duration" && (
        <DurationExercise name={exercise.name} onGoHome={() => setScreen("home")} />
      )}
    </div>
  );
}