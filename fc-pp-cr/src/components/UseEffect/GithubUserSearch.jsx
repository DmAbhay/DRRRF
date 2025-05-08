import { useState, useEffect } from "react";

export function GithubUserSearch() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // Fetch from GitHub API
  useEffect(() => {
    if (!debouncedQuery) {
      setUsers([]);
      return;
    }

    setLoading(true);

    fetch(`https://api.github.com/search/users?q=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, [debouncedQuery]);

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {!loading && users.length === 0 && debouncedQuery && <p>No users found.</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="30" />{" "}
            <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
