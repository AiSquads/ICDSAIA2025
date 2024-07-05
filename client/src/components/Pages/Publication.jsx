import React from "react";
import Publication_head from "../Publication_Components/Publication_head";
import PeerReviewProcess from "../Publication_Components/PeerReviewProcess";
import HowItWorks from "../Publication_Components/HowItWorks";

const Publication = () => {
  return (
    <div>
      <Publication_head />
      <PeerReviewProcess />
      <HowItWorks />
    </div>
  );
};

export default Publication;
