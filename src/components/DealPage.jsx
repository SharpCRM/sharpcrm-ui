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

        <div className="flex w-full flex-col">
          <div className="m-5 p-2  flex w-full h-14 rounded-md bg-white shadow-md">
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Edit Deal
            </Link>
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Attach File
            </Link>
          </div>

          <div className="m-5  flex w-full  rounded-md bg-white shadow-md">
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
