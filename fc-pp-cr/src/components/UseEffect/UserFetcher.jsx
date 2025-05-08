import { useState, useEffect } from "react";
import axios from "axios";

export function UserFetcher() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/4")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); // only once

  return (
    <div>
      {user ? (
        <h2>{user.name}</h2>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}






export function AxiosUserFetcher() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        setError("Failed to fetch user");
        console.error(err);
      });
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {user ? <h2>{user.name}</h2> : <p>Loading...</p>}
    </div>
  );
}
