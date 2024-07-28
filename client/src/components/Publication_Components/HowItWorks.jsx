import React from "react";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="subm_head">
        <h2>How Does it Work</h2>
        <div className="lines"></div>
      </div>

      <div className="about_contents">
        <p>
          When a manuscript is submitted to a journal, it is assessed to see if
          it meets the criteria for submission. If it does, the editorial team
          will select potential peer reviewers within the field of research to
          peer-review the manuscript and make recommendations.
        </p>
        <p>
          There are four main types of peer review used by{" "}
          <span className="bold">Conference Team</span>
        </p>
        <p>
          <span className="bold">Single-blind:</span> the reviewers know the
          names of the authors, but the authors do not know who reviewed their
          manuscript unless the reviewer chooses to sign their report.
        </p>
        <p>
          <span className="bold">Double-blind:</span> the reviewers do not know
          the names of the authors, and the authors do not know who reviewed
          their manuscript.
        </p>
        <p>
          <span className="bold">Open peer:</span> authors know who the
          reviewers are, and the reviewers know who the authors are. If the
          manuscript is accepted, the named reviewer reports are published
          alongside the article and the authors’ response to the reviewer.
        </p>
        <p>
          <span className="bold">Transparent peer:</span> the reviewers know the
          names of the authors, but the authors do not know who reviewed their
          manuscript unless the reviewer chooses to sign their report. If the
          manuscript is accepted, the anonymous reviewer reports are published
          alongside the article and the authors’ response to the reviewer.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
