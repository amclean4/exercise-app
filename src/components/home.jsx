export default function Home({ exerciseList, onSelectExercise }) {
  return (
    <div className="container">
      <h1 style={{ color: "black" }}>Exercise App</h1>
      <p style={{ textAlign: "center" }}>Choose your activity</p>
      <div className="button-group">
        {exerciseList.map((exercise, index) => (
          <button
            key={index}
            onClick={() => onSelectExercise(exercise.name)}
            style={{ backgroundColor: exercise.color }}
          >
            {exercise.name}
          </button>
        ))}
      </div>
    </div>
  );
}
