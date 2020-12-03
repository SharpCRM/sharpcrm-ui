import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  businessEmail: "",
  altEmail: "",
  mobileNumber: "",
  country: "",
  state: "",
  city: "",
  company: "",
  companyURL: "",
  companySocialID: "",
  companyEmail: "",
  companyPhoneNumber: "",
  empSize: "",
  revenueSize: "",
  leadSource: "",
  sicCode: "",
  naicsCode: "",
  targetIndustry: "",
  dataReq: ""
};

const onSubmit = values => {
  console.log(values);
};

const validate = values => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  return errors;
};

function AddNewLead() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log("Visited fields", formik.touched);
  return (
    <div>
      <h1> This is Add new lead page</h1>
      <hr />
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <div className="flex flex-wrap -mx=3 mb-6">
          <div className="w-full m-2 p-2">Lead Contact Details</div>

          <div className="flex">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              {formik.errors.firstName ? (
                <span className="text-red-700">{formik.errors.firstName}</span>
              ) : null}
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="lastName"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                //   value={lastName}
              />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="businessEmail"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Business Email
              </label>
              <input
                type="text"
                name="businessEmail"
                id="businessEmail"
                placeholder="Enter Business email"
                onChange={formik.handleChange}
                value={formik.values.businessEmail}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={businessEmail}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="altEmail"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Alternate Email
              </label>
              <input
                type="text"
                name="altEmail"
                id="altEmail"
                placeholder="Enter Alternate Email"
                onChange={formik.handleChange}
                value={formik.values.altEmail}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={altEmail}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="mobileNumber"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter Mobile Number"
                onChange={formik.handleChange}
                value={formik.values.mobileNumber}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={mobileNumber}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx=3 mb-6">
            <div className="w-full m-2 p-2">Lead Location</div>

            <div className="flex">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Enter Country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="state"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter State Name"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  //   value={lastName}
                />
              </div>

              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="city"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={businessEmail}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx=3 mb-6">
            <div className="w-full m-2 p-2">Company Details</div>
            <div className="flex">
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="company"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Enter Company Name"
                  onChange={formik.handleChange}
                  value={formik.values.company}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={company}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="companyURL"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Company URL
                </label>
                <input
                  type="text"
                  name="companyURL"
                  id="companyURL"
                  placeholder="Enter Company URL"
                  onChange={formik.handleChange}
                  value={formik.values.companyURL}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companyURL}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="companySocialID"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Company Social ID
                </label>
                <input
                  type="text"
                  name="companySocialID"
                  id="companySocialID"
                  placeholder="Enter Company Social ID"
                  onChange={formik.handleChange}
                  value={formik.values.companySocialID}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companySocialID}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="companyEmail"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Company Email
                </label>
                <input
                  type="text"
                  name="companyEmail"
                  id="companyEmail"
                  placeholder="Enter Company Email"
                  onChange={formik.handleChange}
                  value={formik.values.companyEmail}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companyEmail}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="companyPhoneNumber"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Company Phone Number
                </label>
                <input
                  type="text"
                  name="companyPhoneNumber"
                  placeholder="Enter Company Number"
                  onChange={formik.handleChange}
                  value={formik.values.companyPhoneNumber}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={companyPhoneNumber}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="empSize"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Enter Employee Size
                </label>
                <input
                  type="text"
                  name="empSize"
                  placeholder="Enter Employee Size"
                  onChange={formik.handleChange}
                  value={formik.values.empSize}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={empSize}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  htmlFor="revenueSize"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Enter Revenue Size
                </label>
                <input
                  type="text"
                  name="revenueSize"
                  placeholder="Enter Revenue Size"
                  onChange={formik.handleChange}
                  value={formik.values.revenueSize}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  //   value={revenueSize}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap m-2 p-2">
            <div className="w-full ">Data Requirements</div>

            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="leadSource"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Lead Source
              </label>
              <input
                type="text"
                name="leadSource"
                placeholder="Enter Lead Source"
                onChange={formik.handleChange}
                value={formik.values.leadSource}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={leadSource}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="sicCode"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                SIC Code
              </label>
              <input
                type="text"
                name="sicCode"
                placeholder="Enter SIC Code"
                onChange={formik.handleChange}
                value={formik.values.sicCode}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={sicCode}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="naicsCode"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                NAICS Code
              </label>
              <input
                type="text"
                name="naicsCode"
                placeholder="Enter NAICS Code"
                onChange={formik.handleChange}
                value={formik.values.naicsCode}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={naicsCode}
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="targetIndustry"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Target Industry
              </label>
              <input
                type="text"
                name="targetIndustry"
                placeholder="Enter Target Industry"
                onChange={formik.handleChange}
                value={formik.values.targetIndustry}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                //   value={targetIndustry}
              />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label
                htmlFor="dataReq"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Data Requirement
              </label>
              <textarea
                type="text"
                name="dataReq"
                placeholder="Enter Data requirement"
                onChange={formik.handleChange}
                value={formik.values.dataReq}
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

            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white m-2  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Add Lead
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewLead;
