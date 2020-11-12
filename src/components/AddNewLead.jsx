import React, { useState } from "react";

import { useParams } from "react-router-dom";

const AddNewLead = () => {
  let params = useParams();
  const [firstName, setfirstName] = useState("");

  return (
    <div>
      <h1> This is Add new lead page{params.id}</h1>
      <hr />
      <form>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={firstName}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Last Name"
          //   value={lastName}
        />
        <label>Company Name</label>
        <input
          type="text"
          name="company"
          placeholder="Enter Company Name"
          //   value={company}
        />

        <label>Business Email</label>
        <input
          type="text"
          name="businessEmail"
          placeholder="Enter Business email"
          //   value={businessEmail}
        />
        <label>Company Email</label>
        <input
          type="text"
          name="companyEmail"
          placeholder="Enter Company Email"
          //   value={companyEmail}
        />

        <label>Company Social ID</label>
        <input
          type="text"
          name="companySocialID"
          placeholder="Enter First Name"
          //   value={companySocialID}
        />

        <label>Alternate Email</label>
        <input
          type="text"
          name="altEmail"
          placeholder="Enter Alternate Email"
          //   value={altEmail}
        />

        <label>Company URL</label>
        <input
          type="text"
          name="companyURL"
          placeholder="Enter Company URL"
          //   value={companyURL}
        />

        <label>Enter Lead Source</label>
        <input
          type="text"
          name="leadSource"
          placeholder="Enter Lead Source"
          //   value={leadSource}
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          //   value={phoneNumber}
        />

        <label>Company Phone Number</label>
        <input
          type="text"
          name="companyPhoneNumber"
          placeholder="Enter Company Number"
          //   value={companyPhoneNumber}
        />
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter Mobile Number"
          //   value={mobileNumber}
        />

        <label>SIC Code</label>
        <input
          type="text"
          name="sicCode"
          placeholder="Enter SIC Code"
          //   value={sicCode}
        />

        <label>NAICS Code</label>
        <input
          type="text"
          name="naicsCode"
          placeholder="Enter NAICS Code"
          //   value={naicsCode}
        />

        <label>Enter Target Industry </label>
        <input
          type="text"
          name="targetIndustry"
          placeholder="Enter Target Industry"
          //   value={targetIndustry}
        />

        <label>Enter Employee Size</label>
        <input
          type="text"
          name="empSize"
          placeholder="Enter Employee Size"
          //   value={empSize}
        />

        <label>Enter Revenue Size</label>
        <input
          type="text"
          name="revenueSize"
          placeholder="Enter Revenue Size"
          //   value={revenueSize}
        />

        <label>Enter Data Requirement</label>
        <textarea
          type="text"
          name="dataReq"
          placeholder="Enter your custom Data requirement"
          //   value={dataReq}
        />
      </form>
    </div>
  );
};

export default AddNewLead;
