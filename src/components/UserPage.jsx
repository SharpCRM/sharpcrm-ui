import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const UserPage = () => {
  let params = useParams();
  return (
    <div className="flex flex-row flex-wrap">
      <div className="m-5 p-2  flex w-full h-14 rounded-md bg-white shadow-md">
        <Link
          to="newlead"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add New User
        </Link>
      </div>
      <div className="m-5 w-1/4 rounded-md bg-white shadow-md ">
        <div className="">
          <h1>Name: JAMES, BOND</h1>
        </div>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
        <Link to="newlead" className="text-blue-700 font-semibold py-2 px-4 ">
          View User
        </Link>
      </div>
      <div className="m-5  w-1/4 rounded-md bg-white shadow-md">
        <h1>Viewing User page</h1>
        <h1>Name: JAMES, BOND</h1>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
      </div>
      <div className="m-5  w-1/4  rounded-md bg-white shadow-md">
        <h1>Viewing User page</h1>
        <h1>Name: JAMES, BOND</h1>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
      </div>
      <div className="m-5  w-1/4  rounded-md bg-white shadow-md">
        <h1>Viewing User page</h1>
        <h1>Name: JAMES, BOND</h1>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
      </div>

      <div className="m-5  w-1/4  rounded-md bg-white shadow-md">
        <h1>Viewing User page</h1>
        <h1>Name: JAMES, BOND</h1>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
      </div>
      <div className="m-5  w-1/4  rounded-md bg-white shadow-md">
        <h1>Viewing User page</h1>
        <h1>Name: JAMES, BOND</h1>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
      </div>
    </div>
  );
};

export default UserPage;
