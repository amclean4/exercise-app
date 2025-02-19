export default function Home({ onSelectExercise }) {
    return (
      <div className="container">
        <h1 style={{ color: "black" }}>Exercise App</h1>
        <p style={{ textAlign: "center" }}>Choose your activity</p>
        <div className="button-group">
          <button onClick={() => onSelectExercise("Push Ups", "repetition")} style={{ backgroundColor: "#6495ED" }}>Push Ups</button>
          <button onClick={() => onSelectExercise("Running", "duration")} style={{ backgroundColor: "#3CB371" }}>Running</button>
          <button onClick={() => onSelectExercise("Plank", "duration")} style={{ backgroundColor: "#A9A9F5" }}>Plank</button>
          <button onClick={() => onSelectExercise("Situps", "repetition")} style={{ backgroundColor: "#FFD700" }}>Situps</button>
        </div>
      </div>
    );
  }
  