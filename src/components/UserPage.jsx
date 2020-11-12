import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const UserPage = () => {
  let params = useParams();
  return (
    <div className="flex flex-row flex-wrap">
      <div className="m-5   w-1/4  rounded-md bg-white shadow-md overflow-none">
        <h1>Viewing User page</h1>
        <h1>Name: JAMES, BOND</h1>
        <h1>Username: JB007</h1>
        <h1>Password: Alpha#007</h1>
        <h1>Role Name: SUPER_ADMIN_ALL</h1>

        <h1>Created Timestamp: 2020-02-01 06:00 AM</h1>
        <h1>Last Updated : 2020-11-01 10:00 AM</h1>
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
