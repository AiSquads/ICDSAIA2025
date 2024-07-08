import React from "react";

const RegistrationFees = () => {
  return (
    <div className="content_para reveal">
      <h5 className="sub_tit">Registration Fee</h5>
      <div className="table_div">
        <table className="tab fst_tab">
          <tbody>
            <tr className="">
              <th>Indian Author</th>
              <th>IEEE Member</th>
              <th>IEEE Non Member</th>
            </tr>
            <tr>
              <td>
                Student ( UG / PG / Research Scholar) / Faculty / Academician
              </td>
              <td>6000 INR</td>
              <td>6500 INR</td>
            </tr>
            <tr>
              <td>Faculty/Academician</td>
              <td>7000 INR</td>
              <td>7500 INR</td>
            </tr>
            <tr>
              <td>Corporate Sectors Others</td>
              <td>8000 INR</td>
              <td>8500 INR</td>
            </tr>
            <tr>
              <td>Participation Only</td>
              <td>2500 INR</td>
              <td>3000 INR</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table_div">
        <table className="tab">
          <tbody>
            <tr className="">
              <th>Foreign Author</th>
              <th>IEEE Member</th>
              <th>IEEE Non Member</th>
            </tr>
            <tr>
              <td>Academic / Research Scholar / Corporate Sector</td>
              <td>$ 200</td>
              <td>$ 225</td>
            </tr>
            <tr>
              <td>Participation Only</td>
              <td>$ 150</td>
              <td>$ 200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationFees;
