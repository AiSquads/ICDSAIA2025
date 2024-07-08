import React from "react";
import paperTemplate from "../../assets/documents/IEEE -temp.docx";

const PaperFormat = () => {
  return (
    <div className="cont">
      <div className="subm_head">
        <h2>Paper Format</h2>
        <div className="lines"></div>
      </div>

      <div className="subm_link">
        <div className="download_div">
          <h4 className="mt-10">
            Download the paper template document to ensure your submission meets
            the required format.
          </h4>
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
