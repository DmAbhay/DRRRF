import { useState } from "react";

export function ProfileForm() {


  

  const [formData, setFormData] = useState({
    gender: "",
    country: ""
  });

  const countries = [
    "Golok",
    "India",
    "USA",
    "Russia"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gender: ${formData.gender}, Country: ${formData.country}`);
    setFormData({
        country: "",
        gender: ""
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Select Gender</h3>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <h3>Select Country</h3>
      {/* <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select> */}
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">--Select--</option>
        {
            countries.map(country =>(
                 <option value={country}>{country}</option>
            ))
        }
      </select>
      

      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}



export function ProfileFormWithValidation() {
  const [formData, setFormData] = useState({
    gender: "",
    country: ""
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    if (name === "gender" && !value) {
      error = "Gender is required.";
    }
    if (name === "country" && !value) {
      error = "Country is required.";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Gender: ${formData.gender}, Country: ${formData.country}`);
      setFormData({ gender: "", country: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Select Gender</h3>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>
      {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}

      <h3>Select Country</h3>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="">--Select--</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>
      {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}

      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
