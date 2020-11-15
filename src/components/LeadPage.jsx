import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const LeadPage = () => {
  let params = useParams();
  return (
    <div>
      <hr />
      <div className="mr-6 p-2">
        <h1> Lead: {params.id}</h1>

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
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Delete Lead
            </Link>
          </div>
          <div className="m-5 p-2 ">
            <h1>Lead Id: DL12345</h1>
            <p>Lead Status: IN PROGRESS</p>
            <p>First Name: CHARLES </p>
            <p>Last Name : LINGARAJU</p>
            <p>Company Name : Walmart</p>
            <p>Country : United States of America</p>
            <p>State : Michigan</p>
            <p>City : Minnesotta</p>
            <p>Business Email : johnbiden@walmart.com</p>
            <p>Company Email : johnbiden@walmart.com</p>
            <p>Alternate Email : johnbiden2@walmart.com</p>
            <p>Company Social ID : @walmart</p>
            <p>Company URL : www.walmart.com</p>
            <p>Lead Source : Online Search</p>
            <p>Phone number : 1800-485-1255</p>
            <p>Company Phone number : 1800-485-1255</p>
            <p>Mobile number : 800-485-1255</p>
            <p>Sic Code : 1800</p>
            <p>NAICS Code : 1500</p>
            <p>Employee Size: 12000</p>
            <p>Revenue Size : $1500000</p>
            <p>
              Custom Data requirement: Help me to get more leads for my all
              natural products grocery store
            </p>

            <p>Created Timestamp: 2020-02-01 06:00 AM</p>
            <p>Last Updated : 2020-11-01 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
