import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    country: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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
      const response = await axios.post("/reg", formData);
      console.log("Registration successful:", response.data);
      setSuccess(true); // Set success message state
      setTimeout(() => {
        navigate("/"); // Redirect to the home page after a delay
      }, 2000); // Redirect after 2 seconds
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

  const handleCloseModal = () => {
    setSuccess(false);
    setError("");
  };

  return (
    <main className="mains max-w-5xl mx-auto p-8 rounded-md">
      <div className="reg_container mb-10 ">
        <div className="subm_head">
          <h2 className="">REGISTRATION</h2>
          <div className="lines"></div>
        </div>
        <form onSubmit={handleSubmit} className="reg_form space-y-10">
          {error && (
            <div
              className="error_modal bg-red-500 text-white p-4 rounded-lg shadow-md"
              role="alert"
            >
              <div className="flex justify-between items-center">
                <p>{error}</p>
                <button
                  onClick={() => setError("")}
                  className="text-sm text-white ml-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {success && (
            <div
              className="success_modal bg-green-500 text-white p-4 rounded-lg shadow-md"
              role="alert"
            >
              <div className="flex justify-between items-center">
                <p>Registration successful!</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-sm text-white ml-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-2 block w-full border-0 rounded-sm border-b-2 border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
            />
            <label
              htmlFor="name"
              className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
            >
              Name:
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-2 block w-full border-0 rounded-sm border-b-2 border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
            />
            <label
              htmlFor="email"
              className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
            >
              Email:
            </label>
          </div>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="pl-2 block w-full border-0 rounded-sm border-b-2 border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
            />
            <label
              htmlFor="phone"
              className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
            >
              Phone:
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="college"
              id="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="pl-2 block w-full border-0 rounded-sm border-b-2 border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
            />
            <label
              htmlFor="college"
              className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
            >
              College:
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="pl-2 block w-full border-0 rounded-sm border-b-2 border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
            />
            <label
              htmlFor="country"
              className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
            >
              Country:
            </label>
          </div>
          {loading ? (
            <p className="text-sm text-gray-500">Submitting...</p>
          ) : (
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#aa50ff] hover:bg-[#4f015a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Register;
