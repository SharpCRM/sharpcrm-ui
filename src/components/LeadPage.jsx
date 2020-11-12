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

        <div className="flex w-full">
          <div className="m-5  flex   rounded-md bg-white shadow-md">
            <Link to="newlead">Convert Lead</Link>
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
