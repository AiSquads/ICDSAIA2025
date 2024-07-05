import React from "react";
import GASC from "../../assets/images/logos/gac.jpg";
import IEEE from "../../assets/images/logos/IEEE_Logo.png";

const Logos = () => {
  return (
    <div>
      <div className="logos_container">
        <div className="row_container">
          <img src={IEEE} alt="IEEE Logo" className="cpsimg" />
        </div>
        <div className="row_container">
          <img className="gac_img" src={GASC} alt="GAC Logo" />
        </div>
      </div>
    </div>
  );
};

export default Logos;
