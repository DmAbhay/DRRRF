import { useState } from "react";

export function DynamicFieldsForm() {
  const [hobbies, setHobbies] = useState([""]);

  const handleChange = (index, value) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = value;
    setHobbies(newHobbies);
  };

  const addHobby = () => {
    setHobbies([...hobbies, ""]);
  };

  const removeHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hobbies: " + hobbies.filter(h => h.trim() !== "").join(", "));
    setHobbies([""]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Hobbies</h3>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          <input
            placeholder={`Hobby ${index + 1}`}
            value={hobby}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          {hobbies.length > 1 && (
            <button type="button" onClick={() => removeHobby(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addHobby}>
        Add Hobby
      </button>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
