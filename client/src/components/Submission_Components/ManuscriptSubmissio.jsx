import React from "react";

const ManuscriptSubmission = () => {
  return (
    <div className="cont">
      <div className="subm_head">
        <h2>MANUSCRIPT SUBMISSION</h2>
        <div className="lines"></div>
      </div>
      <div className="subm_link">
        <div className="about_heads">
          <h2>File Upload</h2>
        </div>
        <div className="download_div">
          <h4>For Upload Your Manuscript By Using The Easychair Link</h4>
          <a
            className="link"
            href="https://easychair.org/conferences/?conf=icdsaia2023"
          >
            https://easychair.org/conferences/?conf=icdsaia2023
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManuscriptSubmission;
