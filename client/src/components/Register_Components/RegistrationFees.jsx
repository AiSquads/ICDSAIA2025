import React from "react";

const RegistrationFees = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="subm_head mt-20">
        <h2>Registration Fee</h2>
        <div className="lines"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full mb-8 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 px-4 py-2">
                Indian Author
              </th>
              <th className="border border-gray-300 px-4 py-2">IEEE Member</th>
              <th className="border border-gray-300 px-4 py-2">
                IEEE Non Member
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Student (UG / PG / Research Scholar) / Faculty / Academician
              </td>
              <td className="border border-gray-300 px-4 py-2">6000 INR</td>
              <td className="border border-gray-300 px-4 py-2">6500 INR</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Faculty / Academician
              </td>
              <td className="border border-gray-300 px-4 py-2">7000 INR</td>
              <td className="border border-gray-300 px-4 py-2">7500 INR</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Corporate Sectors / Others
              </td>
              <td className="border border-gray-300 px-4 py-2">8000 INR</td>
              <td className="border border-gray-300 px-4 py-2">8500 INR</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Participation Only
              </td>
              <td className="border border-gray-300 px-4 py-2">2500 INR</td>
              <td className="border border-gray-300 px-4 py-2">3000 INR</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-300 px-4 py-2">
                Foreign Author
              </th>
              <th className="border border-gray-300 px-4 py-2">IEEE Member</th>
              <th className="border border-gray-300 px-4 py-2">
                IEEE Non Member
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Academic / Research Scholar / Corporate Sector
              </td>
              <td className="border border-gray-300 px-4 py-2">$200</td>
              <td className="border border-gray-300 px-4 py-2">$225</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Participation Only
              </td>
              <td className="border border-gray-300 px-4 py-2">$150</td>
              <td className="border border-gray-300 px-4 py-2">$200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationFees;
