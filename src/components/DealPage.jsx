import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const DealPage = () => {
  let params = useParams();
  return (
    <div>
      <hr />
      <div className="mr-6 p-2">
        <h1> Deal Details: {params.id}</h1>

        <div className="flex w-full">
          <div className="m-5  flex w-full  rounded-md bg-white shadow-md">
            <Link to="newlead">Convert Lead</Link>
            <h1>Deal Id: DL12345</h1>
            <h1>Lead Id: DL12345</h1>
            <h1>Deal Status: IN PROGRESS</h1>
            <h1>Deal Value: $150000</h1>
            <h1>Final Data File : FileName1,FileName2</h1>
            <h1>Sample Data Attachments : FileName1 , FileName2</h1>
            <h1>Deal Last Updated : 2020-12-01 06:00 AM</h1>
            <h1>Deal Created : 2020-01-01 06:00 AM</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealPage;
