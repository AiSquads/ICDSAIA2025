import React from "react";

const FAQList = ({ faqs }) => {
  if (!Array.isArray(faqs)) {
    return <p>Invalid FAQ data</p>;
  }

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
