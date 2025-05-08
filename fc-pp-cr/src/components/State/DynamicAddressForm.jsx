import { useState } from "react";

export function DynamicAddressForm() {
  const [addresses, setAddresses] = useState([
    { street: "", city: "", zip: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...addresses];
    updated[index][field] = value;
    setAddresses(updated);
  };

  const addAddress = () => {
    setAddresses([...addresses, { street: "", city: "", zip: "" }]);
  };

  const removeAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(addresses, null, 2));
    setAddresses([{ street: "", city: "", zip: "" }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Addresses</h3>
      {addresses.map((addr, index) => (
        <div key={index} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <input
            placeholder="Street"
            value={addr.street}
            onChange={(e) => handleChange(index, "street", e.target.value)}
          />
          <input
            placeholder="City"
            value={addr.city}
            onChange={(e) => handleChange(index, "city", e.target.value)}
          />
          <input
            placeholder="ZIP"
            value={addr.zip}
            onChange={(e) => handleChange(index, "zip", e.target.value)}
          />
          {addresses.length > 1 && (
            <button type="button" onClick={() => removeAddress(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addAddress}>Add Address</button>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
