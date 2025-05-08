// Profile.js
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export function Profile() {
  const { user, setUser } = useContext(UserContext);

  const logout = () => {
    setUser({ name: "", loggedIn: false });
  }

  return (
    <div>
      <p>User: {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
