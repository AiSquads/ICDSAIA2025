import React from "react";
import RegistrationHeader from "../Register_Components/RegistrationHeader";
import RegistrationContent from "../Register_Components/RegistrationContent";
import RegistrationGuidelines from "../Register_Components/RegistrationGuidelines";
import AuthorRegistration from "../Register_Components/AuthorRegistration";
import FinalDocumentsList from "../Register_Components/FinalDocumentsList";
import RegistrationFees from "../Register_Components/RegistrationFees";
import InvoiceRefundPolicy from "../Register_Components/InvoiceRefundPolicy";

const Registration = () => {
  return (
    <div>
      <RegistrationHeader />
      <RegistrationContent />
      <RegistrationGuidelines />
      <AuthorRegistration />
      <FinalDocumentsList />
      <RegistrationFees />
      <InvoiceRefundPolicy />
    </div>
  );
};

export default Registration;
