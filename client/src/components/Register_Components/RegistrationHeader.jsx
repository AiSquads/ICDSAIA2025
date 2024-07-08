import React from "react";

const RegistrationHeader = () => {
  return (
    <main className="mains">
      <div className="content">
        <div>
          <div className="subm_head">
            <h2>REGISTRATION</h2>
            <div className="lines"></div>
          </div>

          <div className="bttn">
            <a href="/reg" className="reg_btn glow-on-hover">
              Register
            </a>
          </div>

          <div className="contents">
            <p>
              All presented and registered papers will be recommended for
              publication.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationHeader;
