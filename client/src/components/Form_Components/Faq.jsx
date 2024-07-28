import React, { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    query: ""
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:80/faq");
      if (Array.isArray(response.data)) {
        setQuestions(response.data);
      } else {
        setError("Unexpected response format");
      }
    } catch (error) {
      setError("Failed to fetch questions");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:80/faq", form);
      setForm({ name: "", email: "", mobile: "", query: "" });
      setSuccess("Question submitted successfully");
      setError("");
      fetchQuestions();
    } catch (error) {
      setError("Failed to submit question");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="subm_head">
        <h2 className="">FAQ</h2>
        <div className="lines"></div>
      </div>
      <main className="max-w-5xl mx-auto p-8 rounded-md">
        <div className="reg_container mb-10">
          <form onSubmit={handleSubmit} className="reg_form space-y-8">
            {/* Input fields */}
            {[
              { type: "text", name: "name", label: "Name" },
              { type: "email", name: "email", label: "Email" },
              { type: "tel", name: "mobile", label: "Mobile" }
            ].map((field, index) => (
              <div className="relative" key={index}>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  className="pl-2 block w-full border-0 rounded-sm border-b-2 border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
                />
                <label
                  htmlFor={field.name}
                  className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                name="query"
                id="query"
                cols="30"
                rows="3"
                value={form.query}
                onChange={handleChange}
                required
                className="pl-2 block w-full border-1 rounded-md border-[#6d6d6d] py-3 focus:border-[#aa50ff] focus:outline-none peer bg-inherit"
              ></textarea>
              <label
                htmlFor="query"
                className="ml-2 absolute left-0 top-2 text-gray-500 cursor-text transition-all peer-focus:text-xs peer-focus:top-[-1rem] peer-focus:text-[#000000] peer-focus:font-bold peer-valid:text-xs peer-valid:top-[-1rem] peer-valid:text-[#000000] peer-valid:font-bold"
              >
                Query <span className="text-red-500">*</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#aa50ff] hover:bg-[#4f015a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
          {success && <h3 className="text-green-500 mt-4">{success}</h3>}
          {error && <h3 className="text-red-500 mt-4">{error}</h3>}
        </div>
        <div className="about_heads mb-6 ">
          <div className="subm_head">
            <h2 className="">Questions</h2>
            <div className="lines"></div>
          </div>
        </div>
        {error && <h3 className="text-red-500">{error}</h3>}
        {questions.length > 0 ? (
          <div className="question_div gap-5 space-y-5">
            {questions.map((data, index) => (
              <div
                className="question p-6 bg-[rgb(210,255,224)] border-2 border-[rgb(127,255,168)] rounded-md shadow-md"
                key={index}
              >
                <h6 className="name text-lg font-semibold text-black m-2">
                  {data.name}
                </h6>
                <h6 className="quest text-md text-gray-800 m-2">
                  <span className="font-semibold">Question:</span> {data.quest}{" "}
                  ?
                </h6>
                <h6 className="ans text-md text-gray-800 m-2">
                  <span className="font-semibold">Answer:</span> {data.ans}
                </h6>
              </div>
            ))}
          </div>
        ) : (
          !error && <h3 className="text-gray-500">No Data Found</h3>
        )}
      </main>
    </div>
  );
};

export default Faq;
