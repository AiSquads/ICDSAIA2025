import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    college: "",
    country: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/reg", formData);
      console.log("Registration successful:", response.data);
      // Optionally reset form fields or show success message
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error("Registration failed:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <button type="submit">Submit</button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </>
          )}
        </form>
      </div>
    </main>
  );
};

export default Register;
