import { useState, useEffect } from "react";

export function CounterEffect() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    console.log("Count changed to", count);
    return (() =>{
      console.log("jai ho")
      setFlag(!flag)
    })
  }, [count]); // runs every time count changes

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {flag && <h1>Jai shree krishna</h1>}
    </>
  );
}

// useEffect(() => {
//     // Code to run after the component renders
//     // (side effects: API call, event listener, etc.)
  
//     return () => {
//       // Optional: Cleanup function
//       // Runs before the component unmounts or before next effect
//     };
// }, [/* dependency array */]);
