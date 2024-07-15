import React from "react";

const RegistrationContent = () => {
  return (
    <div className="reg_box_content py-10 px-4">
      <div className="subm_head mt-20">
        <h2>Registration Guidelines</h2>
        <div className="lines"></div>
      </div>
      <div className="about_contents justify-center p-10 max-w-4xl mx-auto">
        <p className="text-center text-lg mb-4">
          Anyone of the authors of the accepted paper should be registered to
          the conference.
        </p>
        <p className="text-center text-lg">
          The Conference registration fee includes virtual admission to all
          technical and paper presentation sessions, conference kit, and
          e-certificate(s). The corresponding author’s email address will be
          used to provide authors with information about the publication.
        </p>
      </div>
    </div>
  );
};

export default RegistrationContent;
