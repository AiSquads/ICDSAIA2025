import React, { useState } from "react";
import axios from "axios";

const FAQList = ({ faqs, onDelete }) => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = async (id) => {
    const answer = answers[id];

    try {
      await axios.put(`http://localhost:80/faq/${id}`, {
        ans: answer
      });
      alert("Answer submitted successfully");
    } catch (error) {
      console.error("Error submitting answer:", error);
      alert("Failed to submit answer");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:80/faq/${id}`);
      alert("Question deleted successfully");
      onDelete(id);
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Failed to delete question");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {faqs.map((faq) => (
        <div
          key={faq._id}
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6 transition-shadow hover:shadow-lg"
        >
          <h4 className="text-xl font-semibold mb-2">{faq.quest}</h4>
          <p className="text-gray-600 mb-4">{faq.ans}</p>
          <textarea
            className="w-full min-h-[100px] p-2 border border-gray-300 rounded-lg resize-y mb-4 text-gray-900"
            placeholder="Answer"
            value={answers[faq._id] || ""}
            onChange={(e) => handleAnswerChange(faq._id, e.target.value)}
          ></textarea>
          <button
            className="bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600 mr-2"
            onClick={() => handleSubmit(faq._id)}
          >
            Submit Answer
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={() => handleDelete(faq._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
