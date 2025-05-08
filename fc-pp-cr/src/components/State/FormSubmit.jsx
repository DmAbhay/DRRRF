import { useState } from "react";


export function MultiInputForm1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export function MultiInputForm2() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}






export function DynamicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update only the field being edited
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Age: ${formData.age}`);
    setFormData(
      {
        name: "",
        email: "",
        age: ""
      }
    )
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}





export function ValidatedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.age.trim()) newErrors.age = "Age is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Submitted: ${JSON.stringify(formData)}`);
      setFormData({ name: "", email: "", age: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}



export function EnhancedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    mobileNo: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);


  const [errors, setErrors] = useState({});

  const validate = (fieldName, value) => {
    let error = "";

    if (fieldName === "name") {
      if (!value.trim()) error = "Name is required.";
    }

    if (fieldName === "email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        error = "Invalid email.";
      }
    }

    if (fieldName === "age") {
      if (!value.trim()) {
        error = "Age is required.";
      } else if (isNaN(value) || value < 1 || value > 120) {
        error = "Age must be between 1 and 120.";
      }
    }

    if (fieldName === "mobileNo") {
      if (!value.trim()) {
        error = "Mobile No is required.";
      } else if (!/^\d{10}$/.test(value)) {
        error = "Mobile No must be exactly 10 digits.";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key]);
      if (error) validationErrors[key] = error;
    });

    setErrors(validationErrors);

    if (!termsAccepted) {
      validationErrors.terms = "You must accept the terms.";
    }

    if (Object.keys(validationErrors).length === 0) {
      alert(`Submitted: ${JSON.stringify(formData)}`);
      setFormData({ name: "", email: "", age: "", mobileNo: "" });
    }
    setTermsAccepted(false)
  };

  const inputStyle = (field) => ({
    borderColor: errors[field] ? "red" : "#ccc",
    borderWidth: "1px",
    padding: "6px",
    marginBottom: "6px"
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle("name")}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle("email")}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          style={inputStyle("age")}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <div>
        <input
          name="mobileNo"
          placeholder="Mobile No"
          value={formData.mobileNo}
          onChange={handleChange}
          style={inputStyle("mobileNo")}
        />
        {errors.mobileNo && <p style={{ color: "red" }}>{errors.mobileNo}</p>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          I agree to the terms and conditions
        </label>
        {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

