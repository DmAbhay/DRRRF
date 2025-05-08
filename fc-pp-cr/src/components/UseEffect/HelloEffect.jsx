import { useEffect } from "react";

export function HelloEffect() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []); // empty array = run once
  return <h1>Hello!</h1>;
}
