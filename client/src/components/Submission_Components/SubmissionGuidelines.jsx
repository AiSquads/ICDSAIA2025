import React from "react";

const SubmissionGuidelines = () => {
  return (
    <div className="cont">
      <div className="about_heads">
        <h2>Submission Guidelines</h2>
      </div>
      <div className="subm_container">
        <div>
          <h4 className="title">Paper Format</h4>
          <div className="lines"></div>
        </div>
        <div className="content_para ">
          <p>
            Please strictly follow instructions for paper formatting otherwise
            the paper, which does not meet these guidelines may not be
            published.
          </p>
          <p>
            All submitted papers are to be limited to a maximum length of 4-6
            pages.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h4 className="title">Manuscript Preparation</h4>
          <div className="lines"></div>
        </div>
        <div className="content_para ">
          <ul>
            <li>
              The manuscript should be prepared using aforementioned MS WORD
              and/or LaTeX template
            </li>
            <li>
              The figures / graphs / plots in the manuscript MUST be of good
              resolution; tables must not be in pictorial format. Text in
              figures should not be too small, and preferably of equal size as
              text of the article.
            </li>
            <li>
              Figures, text, or the tables must be visible within the boundary
              of the text area of the page and must not go beyond it.
            </li>
            <li>
              Do not use any social / academic titles (e.g. Mr.,Ms.,Dr.,Prof.
              etc.) preceding the author names. Do not mention the position of a
              person (e.g., research scholar, student, assistant professor,
              professor etc.) in the affiliation.
            </li>
            <li>
              Mention full address, affiliation, and email of all authors,
              specify a corresponding author with the corresponding e-mail ID.
              [Once an article is accepted, the publisher will send the
              acceptance and proofreading of article to this e-mail]
            </li>
            <li>
              Articles must be written in spell checked and grammatically
              correct English.
            </li>
            <li>
              All references, figures, and tables should be numbered in sequence
              starting from 1 and must be duly cited / referred within the text.
            </li>
          </ul>
          <div>
            <h5 className="title sub_tit">
              When writing your paper, the submission must fulfill these main
              criteria:
            </h5>
          </div>
          <div>
            <ul className="subcont">
              <li>Originality of the research work</li>
              <li>Clarity on the research flow</li>
              <li>Solidity of the research methods</li>
              <li>
                Proper results and discussions especially with respect to
                validation issues
              </li>
            </ul>
          </div>
          <div>
            <h5 className="tit">
              <span className="sub_tit">Note: </span> Submitted papers should
              not be under review or submitted for publication elsewhere during
              the review period. All papers will be peer reviewed by at least
              three independent referees.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;
