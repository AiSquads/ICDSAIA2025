import React from "react";
import paperTemplate from "../../assets/documents/IEEE -temp.docx";

const PaperFormat = () => {
  return (
    <div className="cont">
      <div className="subm_link">
        <div className="about_heads">
          <h2>Paper Format</h2>
        </div>
        <div className="download_div">
          <a
            className="download_link1"
            href={paperTemplate}
            download="paper-template"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaperFormat;
