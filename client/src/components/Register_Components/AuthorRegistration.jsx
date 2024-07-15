import React from "react";

const AuthorRegistration = () => {
  return (
    <div className="author-registration-container py-10 px-4">
      <div className="subm_head">
        <h2 className="">The list of final documents</h2>
        <div className="lines"></div>
      </div>

      <div className="content_para text-center justify-center p-10 max-w-4xl mx-auto">
        <h5 className="sub_tit text-2xl font-semibold mt-6">
          Final Camera-Ready Paper
        </h5>
        <p className="text-lg mt-4">
          The paper should be updated according to the review comments sent with
          the acceptance letter.
        </p>

        <p className="text-lg mt-4">
          The uploaded camera-ready paper should be the original source file
          (e.g., MS Word/Latex) named as the paper ID sent in the acceptance
          letter.
        </p>
      </div>
    </div>
  );
};

export default AuthorRegistration;
