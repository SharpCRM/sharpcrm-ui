import MUIDataTable from "mui-datatables";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Leads extends Component {
  constructor(props) {
    super(props);
    this.state = { leads: [] };
    this.state = { isLoading: true };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/lead/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ leads: data });
        this.setState({ isLoading: false });
      })
      .catch(console.log("Logging in error"));
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }
    // else if (this.state.leads.length == 0) {
    //   return (
    //     <div>
    //       <h1>No Leads Found !!!</h1>
    //     </div>
    //   );
    // } else {
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
        <h2>Total count of Leads: {this.state.leads.length}</h2>
        {this.state.leads.length > 0 ? (
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
            {this.state.leads.map(item => (
              <tr className=" px-4 py-2 odd:bg-gray-200" key={item.id}>
                <td className="px-4 py-2">
                  <Link to={`/leads/${item.id}`}>{item.id}</Link>
                </td>

                <td className=" px-4 py-2">{item.leadStatus}</td>
                <td className=" px-4 py-2">{item.firstName}</td>
                <td className=" px-4 py-2">{item.lastName}</td>
                <td className=" px-4 py-2">{item.companyName}</td>
                <td className=" px-4 py-2">{item.country}</td>
                <td className=" px-4 py-2">{item.businessEmail}</td>
                <td className=" px-4 py-2">{item.mobileNumber}</td>
                <td className=" px-4 py-2">{item.targetIndustry}</td>

                <td className=" px-4 py-2">{item.createdTimeStamp}</td>
                <td className=" px-4 py-2">{item.lastUpdatedTimeStamp}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div className="flex w-full text-red-700 text-xl justify-center">
            <h1>No Leads Yet !!!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Leads;
