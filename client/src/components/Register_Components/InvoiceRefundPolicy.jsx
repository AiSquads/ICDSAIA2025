import React from "react";

const InvoiceRefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="subm_head">
        <h2 className="">Invoice and Refund Policy</h2>
        <div className="lines"></div>
      </div>
      <div className="content_para">
        <p>
          <span className="sub_tit font-semibold">INVOICE REQUEST –</span>{" "}
          Invoice will be provided on-site at the conference for paid
          registration. However, if the authors need an invoice before the
          payment, please send the below details to
          <span className="sub_tit" style={{ color: "var(--firth-color)" }}>
            <a
              href="mailto:icdsaia@gascgobi.ac.in"
              className="text-blue-500 underline ml-1"
            >
              icdsaia@gascgobi.ac.in
            </a>
          </span>
          . The subject of the invoice request mail must be “Invoice request”.
          The pdf copy of the invoice will be sent to the corresponding author.
        </p>

        <p className="sub_tit font-semibold mt-4">
          Details needed for invoice:
        </p>
        <ul className="list-disc list-inside ml-6 mt-2">
          <li>Paper ID</li>
          <li>Name of the billing author and affiliation</li>
          <li>Billing address (with TAX number, if any)</li>
          <li>E-mail ID</li>
          <li>Title of the paper</li>
          <li>
            Category of registration (Student/ professional with publication
            option)
          </li>
          <li>Invoice amount (Registration fee)</li>
        </ul>
        <p className="mt-4">
          Please send the above details as soon as you receive the acceptance
          mail from the
          <span
            className="text-purple-600 font-bold ml-1"
            style={{
              textShadow: "0 0 15px white, 0 0 15px white"
            }}
          >
            ICDSAIA-2023
          </span>{" "}
          Secretariat.
        </p>
        <p className="mt-4">
          <span className="sub_tit font-semibold">IMPORTANT -</span> Please note
          that at least ONE author MUST register for the full conference prior
          to the final manuscript submission. Students must produce a full-time
          student card for verification at the time of registration at the
          conference.
        </p>
      </div>
    </div>
  );
};

export default InvoiceRefundPolicy;
