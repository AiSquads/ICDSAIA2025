import React from "react";

const AuthorRegistration = () => {
  return (
    <div>
      <h4 className="title">The list of final documents is:</h4>
      <div className="lines"></div>
      <div className="content_para ">
        <h5 className="sub_tit">Final Camera-Ready Paper:</h5>
        <p>
          The paper should be updated according to the review comments sent with
          the acceptance letter.
        </p>

        <p>
          The uploaded camera ready paper should be the original source file
          (Eg. MS Word/Latex) named as paper ID sent in the acceptance letter.
        </p>
      </div>
    </div>
  );
};

export default AuthorRegistration;
