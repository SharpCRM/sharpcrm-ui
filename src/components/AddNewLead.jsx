import React, { useState } from "react";

import { useParams, Link } from "react-router-dom";

const AddNewLead = () => {
  let params = useParams();
  const [firstName, setfirstName] = useState("");

  return (
    <div>
      <h1> This is Add new lead page{params.id}</h1>
      <hr />
      <form className="w-full">
        <div className="flex flex-wrap -mx=3 mb-6">
          <div className="w-full">Lead Contact Details</div>

          <div className="flex">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Last Name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                //   value={lastName}
              />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Business Email
              </label>
              <input
                type="text"
                name="businessEmail"
                placeholder="Enter Business email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={businessEmail}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Alternate Email
              </label>
              <input
                type="text"
                name="altEmail"
                placeholder="Enter Alternate Email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={altEmail}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Enter Mobile Number"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={mobileNumber}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx=3 mb-6">
            <div className="w-full">Lead Location</div>

            <div className="flex">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Last Name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  //   value={lastName}
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  City{" "}
                </label>
                <input
                  type="text"
                  name="businessEmail"
                  placeholder="Enter Business email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={businessEmail}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx=3 mb-6">
            <div className="w-full">Company Details</div>
            <div className="flex">
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter Company Name"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={company}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Company URL
                </label>
                <input
                  type="text"
                  name="companyURL"
                  placeholder="Enter Company URL"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companyURL}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Company Social ID
                </label>
                <input
                  type="text"
                  name="companySocialID"
                  placeholder="Enter Company Social ID"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companySocialID}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Company Email
                </label>
                <input
                  type="text"
                  name="companyEmail"
                  placeholder="Enter Company Email"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companyEmail}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Company Phone Number
                </label>
                <input
                  type="text"
                  name="companyPhoneNumber"
                  placeholder="Enter Company Number"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companyPhoneNumber}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Enter Employee Size
                </label>
                <input
                  type="text"
                  name="empSize"
                  placeholder="Enter Employee Size"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={empSize}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Enter Revenue Size
                </label>
                <input
                  type="text"
                  name="revenueSize"
                  placeholder="Enter Revenue Size"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={revenueSize}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">Data Requirements</div>

            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Enter Lead Source
              </label>
              <input
                type="text"
                name="leadSource"
                placeholder="Enter Lead Source"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={leadSource}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                SIC Code
              </label>
              <input
                type="text"
                name="sicCode"
                placeholder="Enter SIC Code"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={sicCode}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                NAICS Code
              </label>
              <input
                type="text"
                name="naicsCode"
                placeholder="Enter NAICS Code"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={naicsCode}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Enter Target Industry{" "}
              </label>
              <input
                type="text"
                name="targetIndustry"
                placeholder="Enter Target Industry"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={targetIndustry}
              />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Enter Data Requirement
              </label>
              <textarea
                type="text"
                name="dataReq"
                placeholder="Enter Data requirement"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={dataReq}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center m-5 p-2 h-14">
          <div>
            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Clear
            </Link>

            <Link
              to="newlead"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Add Lead
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewLead;
