import React from "react";

const InvoiceRefundPolicy = () => {
  return (
    <div className="content_para ">
      <h5 className="sub_tit">Invoice and refund policy</h5>
      <p>
        <span className="sub_tit"> INVOICE REQUEST – </span> Invoice will be
        provided on-site at the conference for paid registration. However, if
        the authors need invoice before the payment, please send the below
        details to
        <span className="sub_tit" style={{ color: "var(--firth-color)" }}>
          <a href="mailto:icdsaia@gascgobi.ac.in">icdsaia@gascgobi.ac.in</a>
        </span>
        The subject of the invoice request mail must be “Invoice request”. The
        pdf copy of the invoice will be sent to the corresponding author.
      </p>

      <p className="sub_tit">Details needed for invoice:</p>
      <ul>
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
      <p>
        Please send the above details as soon as you received the acceptance
        mail from the
        <span
          style={{
            color: "rgb(149, 11, 204)",
            textShadow: "0 0 15px white, 0 0 15px white"
          }}
        >
          ICDSAIA-2023{" "}
        </span>{" "}
        Secretariat.
      </p>
      <p>
        <span className="sub_tit"> IMPORTANT- </span>Please note that at least
        ONE author MUST register the full conference prior to the final
        manuscript submission. Students must produce full-time student card for
        verification at the time of registration at the conference.
      </p>
    </div>
  );
};

export default InvoiceRefundPolicy;
