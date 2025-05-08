// Header.js
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export function Header() {
  const { user } = useContext(UserContext);

  return <h1>Welcome, {user.name}!</h1>;
}
