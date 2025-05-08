// UserContext.js
import { useState, createContext } from "react";


export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "John Doe", loggedIn: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
