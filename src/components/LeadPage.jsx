import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LeadPage = () => {
  let params = useParams();
  let history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [leadId, setLeadId] = useState(params.id);
  const [lead, setLead] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/lead/" + params.id)
      .then(res => {
        console.log(res);
        setLead(res.data);
      })
      .catch(error => {
        toast.error("System error occurred while fetching Lead Data !");
      });
  }, [leadId]);

  const deleteLead = id => {
    if (
      window.confirm(
        "Are you sure you want to delete lead with ID: " + id + " ?"
      )
    ) {
      axios
        .delete("http://localhost:8080/api/lead/" + params.id)
        .then(res => {
          toast.success(
            "Deleted Lead with ID: " + params.id + " successfully !"
          );
          history.push("/leads");
        })
        .catch(error => {
          toast.error("System error occurred while deleting Lead  !");
        });
      console.log("Deleted");
    } else {
      console.log("Cancelled delete");
    }
  };
  return (
    <div>
      <hr />
      <div className="mr-6 p-2">
        <h1> Lead Details for : {params.id}</h1>

        <div className="flex w-full flex-col">
          <div className="flex m-5 p-2 h-14  rounded-md bg-white shadow-md">
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Convert Lead
            </Link>
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Edit Lead
            </Link>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => deleteLead(lead.id)}
            >
              Delete Lead
            </button>
          </div>
          <div className="m-5 p-2 ">
            <h1>Lead Id: {lead.id}</h1>
            <p>Lead Status: {lead.leadStatus}</p>
            <p>First Name: {lead.firstName} </p>
            <p>Last Name : {lead.lastName}</p>
            <p>Company Name : {lead.companyName}</p>
            <p>Country : {lead.country}</p>
            <p>State : {lead.state}</p>
            <p>City : {lead.city}</p>
            <p>Business Email : {lead.businessEmail}</p>
            <p>Company Email : {lead.companyEmail}</p>
            <p>Alternate Email : {lead.alternateEmail}</p>
            <p>Company Social ID : {lead.companySocialId}</p>
            <p>Company URL : {lead.companyURL}</p>
            <p>Lead Source : {lead.leadSource}</p>
            <p>Phone number : {lead.phoneNumber}</p>
            <p>Company Phone number : {lead.companyPhoneNumber}</p>
            <p>Mobile number : {lead.mobileNumber}</p>
            <p>Sic Code : {lead.sicCode}</p>
            <p>NAICS Code : {lead.naicsCode}</p>
            <p>Employee Size: {lead.employeeSize}</p>
            <p>Revenue Size : {lead.revenueSize}</p>
            <p>Custom Data requirement: {lead.customDataRequirement}</p>

            <p>Created Timestamp: {lead.createdTimeStamp}</p>
            <p>Last Updated : {lead.lastUpdatedTimeStamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
