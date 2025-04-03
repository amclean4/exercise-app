import { useState } from "react";
import Home from "./components/Home";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [exercise, setExercise] = useState({});

  const exerciseList = [
    { name: "Push Ups", type: "repetition", suggested: "Situps", color: "#6495ED" },
    { name: "Running", type: "duration", suggested: "Plank", color: "#3CB371" },
    { name: "Plank", type: "duration", suggested: "Push Ups", color: "#A9A9F5" },
    { name: "Situps", type: "repetition", suggested: "Running", color: "#FFD700" },
  ];

  const handleSelectExercise = (name) => {
    const selected = exerciseList.find((ex) => ex.name === name);
    if (selected) {
      setExercise(selected);
      setScreen(selected.type);
    }
  };

  return (
    <div className="container">
      {screen === "home" && (
        <Home exerciseList={exerciseList} onSelectExercise={handleSelectExercise} />
      )}
      {screen === "repetition" && (
        <RepetitionExercise
          name={exercise.name}
          suggested={exercise.suggested}
          onGoHome={() => setScreen("home")}
          onGoToExercise={handleSelectExercise}
        />
      )}
      {screen === "duration" && (
        <DurationExercise
          name={exercise.name}
          suggested={exercise.suggested}
          onGoHome={() => setScreen("home")}
          onGoToExercise={handleSelectExercise}
        />
      )}
    </div>
  );
}
