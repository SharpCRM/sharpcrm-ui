import MUIDataTable from "mui-datatables";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Leads extends Component {
  render() {
    const data = [
      {
        id: "LD100",
        leadStatus: "New Lead",
        firstName: "Robin",
        lastName: "Wieruch",
        companyName: "Walmart",
        country: "United States of America",
        bussinessEmail: "teja@walmart.com",
        mobile: "+118006104856",
        targetIndustry: "E-Commerce",
        createdOn: "2020-10-14 06:00:12",
        lastUpdatedOn: "2020-10-20 06:00:12"
      },
      {
        id: "LD101",
        leadStatus: "Follow Up",
        firstName: "Robin",
        lastName: "Wieruch",
        companyName: "Walmart",
        country: "Canada",
        bussinessEmail: "teja@walmart.com",
        mobile: "+118006104856",
        targetIndustry: "Construction",

        createdOn: "2020-10-14 06:00:12",
        lastUpdatedOn: "2020-10-20 06:00:12"
      },
      {
        id: "LD102",
        leadStatus: "Cold",
        firstName: "Robin",
        lastName: "Wieruch",
        companyName: "Walmart",
        country: "Germany",
        bussinessEmail: "teja@walmart.com",
        mobile: "+118006104856",
        targetIndustry: "Aviation",

        createdOn: "2020-10-14 06:00:12",
        lastUpdatedOn: "2020-10-20 06:00:12"
      }
    ];

    return (
      <div className="mr-6 p-2">
        <div className="flex w-full">
          <div className="m-5 p-2 flex w-full h-14 rounded-md bg-white shadow-md">
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Add New Lead
            </Link>
          </div>
        </div>
        <h2>Total count of Leads: {data.length}</h2>
        <table className="table-auto bg-white rounded border">
          <tr className="bg-blue-200">
            <th>Lead ID</th>
            <th>Lead Status</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Country</th>
            <th>Bussiness email</th>
            <th>Mobile number</th>
            <th>Target Industry</th>
            <th>Created on</th>
            <th>Last Updated</th>
          </tr>
          {data.map(item => (
            <tr className=" px-4 py-2 odd:bg-gray-200" key={item.id}>
              <td className="px-4 py-2">
                <Link to={`/leads/${item.id}`}>{item.id}</Link>
              </td>

              <td className=" px-4 py-2">{item.leadStatus}</td>
              <td className=" px-4 py-2">{item.firstName}</td>
              <td className=" px-4 py-2">{item.lastName}</td>
              <td className=" px-4 py-2">{item.companyName}</td>
              <td className=" px-4 py-2">{item.country}</td>
              <td className=" px-4 py-2">{item.bussinessEmail}</td>
              <td className=" px-4 py-2">{item.mobile}</td>
              <td className=" px-4 py-2">{item.targetIndustry}</td>

              <td className=" px-4 py-2">{item.createdOn}</td>
              <td className=" px-4 py-2">{item.lastUpdatedOn}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Leads;
