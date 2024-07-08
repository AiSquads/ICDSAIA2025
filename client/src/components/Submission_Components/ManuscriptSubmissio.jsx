import React from "react";

const ManuscriptSubmission = () => {
  return (
    <div className="cont">
      <div className="subm_head">
        <h2>MANUSCRIPT SUBMISSION</h2>
        <div className="lines"></div>
      </div>
      <div className="subm_link">
        <div className="about_heads mt-20">
          <h2 className="w-60">File Upload</h2>
        </div>
        <div className="download_div -mt-10">
          <h4>For Upload Your Manuscript By Using The Easychair Link</h4>
          <a
            className="link"
            href="https://easychair.org/conferences/?conf=icdsaia2023"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Recommended security attribute for external links
          >
            Upload
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManuscriptSubmission;
