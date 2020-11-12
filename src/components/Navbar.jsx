import React, { useState, Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="bg-indigo-900 shadow-lg">
        <nav className="flex flex-wrap ">
          <div className="flex container mx-auto justify-between">
            <div className="flex sm:flex justify-left">
              <a href="#" className="text-white text-xl font-bold p-3">
                Sharp CRM
              </a>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-white font-bold p-3">
                Sumateja K
              </a>
              <a href="/logout" className="text-white font-bold p-3">
                Logout
              </a>
            </div>
          </div>
        </nav>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto">
            <div className="flex justify-left ">
              <ul className="flex">
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <Link
                    to="/dashboard"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <Link
                    to="/leads"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Leads
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <Link
                    to="/deals"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Deals
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <Link
                    to="/leads"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Sample Data
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <Link
                    to="/users"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Users
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <Link
                    to="/roles"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Roles
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
