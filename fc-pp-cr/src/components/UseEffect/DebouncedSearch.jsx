import { useState, useEffect } from "react";

export function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [result, setResult] = useState("");

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer); // cleanup
  }, [query]);

  // Fetch API or simulate API
  useEffect(() => {
    if (debouncedQuery) {
      console.log("Fetching data for:", debouncedQuery);
      // simulate API call
      setResult(`Result for "${debouncedQuery}"`);
    } else {
      setResult("");
    }
  }, [debouncedQuery]);

  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{result}</p>
    </div>
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
  

