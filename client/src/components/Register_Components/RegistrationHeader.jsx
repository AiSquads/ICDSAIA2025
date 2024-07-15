import React from "react";

const RegistrationHeader = () => {
  return (
    <main className="mains py-10">
      <div className="content max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">

          <div className="subm_head">
            <h2>REGISTRATION</h2>
            <div className="lines"></div>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <a href="/reg" className="download_link1 glow-on-hover ">
            Register
          </a>
        </div>

        <div className="content flex justify-center">
          <p className="text-center text-lg">
            All presented and registered papers will be recommended for
            publication.
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegistrationHeader;
