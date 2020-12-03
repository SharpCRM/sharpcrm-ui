import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const DataPage = () => {
  let params = useParams();
  return (
    <div>
      <hr />
      <div className="mr-6 p-2">
        <h1> Data Page: {params.id}</h1>

        <div className="flex w-full flex-col">
          <div className="m-5 p-2  flex w-full h-14 rounded-md bg-white shadow-md">
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Upload New Sample
            </Link>
          </div>
          <div className="m-5 p-2">
            <h1>Data Id: DA12345</h1>
            <p>File Name : Telecom.csv</p>
            <p>Data Type: Sample </p>
            <p>Sic Code : 10001</p>
            <p>Naics code : 20002</p>
            <p>Target Industry : Telecom</p>
            <p>Created Timestamp: 2020-02-01 06:00 AM</p>
            <p>Last Updated : 2020-11-01 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
