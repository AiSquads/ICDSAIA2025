// Register.jsx

import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    college: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example of sending data to a backend API (replace with your actual endpoint)
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      console.log("Registration successful:", response.data);
      // Optionally reset form fields or show success message
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error state or show error message
    }
  };

  return (
    <main className="mains">
      <div className="reg_container">
        <form onSubmit={handleSubmit} className="reg_form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <label htmlFor="whatsapp">Whatsapp:</label>
          <input
            type="tel"
            name="whatsapp"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <label htmlFor="college">College:</label>
          <input
            type="text"
            name="college"
            id="college"
            value={formData.college}
            onChange={handleChange}
            required
          />

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
