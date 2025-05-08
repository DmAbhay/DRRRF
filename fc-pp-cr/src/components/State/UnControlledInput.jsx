import { useRef } from "react";

export function UnControlledInput() {
  const nameRef = useRef();

  const handleSubmit = () => {
    alert("Name: " + nameRef.current.value);
    nameRef.current.value = "";

    
  };

  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleSubmit}>Show Name</button>
    </div>
  );
}
