

export function ChildComponent({ onGreet }) {
  const name = 'Child';

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => onGreet(name)}>Click to Greet</button>
    </div>
  );
}

