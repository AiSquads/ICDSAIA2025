// Faq.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Faq = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("/fetchQuestions"); // Assuming endpoint to fetch questions
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div>
      <main className="mains">
        <div className="reg_container">
          <form action="query" method="post" className="reg_form">
            <label htmlFor="">
              Name : <span>*</span>
            </label>
            <input type="text" name="name" id="" required />
            <label htmlFor="">
              Email : <span>*</span>
            </label>
            <input type="email" name="mail" id="" required />
            <label htmlFor="">Mobile :</label>
            <input type="tel" name="mob" id="" />
            <label htmlFor="">Query :</label>
            <textarea name="qust" id="" cols="10" rows="10" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="about_heads">
          <h2>Questions</h2>
        </div>
        {questions.length > 0 ? (
          <div className="question_div">
            {questions.map((data, index) => (
              <div className="question" key={index}>
                <h6 className="name">{data.name}</h6>
                <h6 className="quest">{data.quest} ?</h6>
                <h6 className="ans">{data.ans}.</h6>
              </div>
            ))}
          </div>
        ) : (
          <h3>No Data Found</h3>
        )}
      </main>
    </div>
  );
};

export default Faq;
