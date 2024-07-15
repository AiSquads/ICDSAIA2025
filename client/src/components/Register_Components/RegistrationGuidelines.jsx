import React from "react";

const RegistrationGuidelines = () => {
  return (
    <div className="reg_box_content py-10 px-4">
      <div className="subm_head">
        <h2 className="">Author Registration</h2>
        <div className="lines"></div>
      </div>

      <div className="content_para text-center justify-center p-10 max-w-4xl mx-auto">
        <p className="text-lg mb-4">
          Each article must be accompanied by at least one full registration and
          payment to guarantee publication. Presenting authors must register and
          pay the registration fees by the registration deadline mentioned in
          the conference homepage. Please, send your final paper, publishing
          agreement along with the fee receipt [here]. On receiving and
          verifying the documents, the organizers will acknowledge the
          registration.
        </p>
        <p className="text-lg">
          The final documents must be submitted through E-mail only.
        </p>
      </div>
    </div>
  );
};

export default RegistrationGuidelines;
