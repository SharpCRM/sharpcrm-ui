import React, { useState, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  FaHome,
  FaDatabase,
  FaUser,
  FaUsers,
  FaUserCircle,
  FaPowerOff
} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

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
            <div className="flex justify-end p-3 text-white">
              <ul className="flex">
                <li>
                  <FaUserCircle className="inline-block align-middle" />
                  <Link to="/users" className=" font-bold p-3">
                    Sumateja K
                  </Link>
                </li>
                <li>
                  <FaPowerOff className="inline-block align-middle" />
                  <Link to="/logout" className="font-bold p-3">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto">
            <div className="flex justify-left ">
              <ul className="flex">
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <FaHome className="inline-block align-baseline" />
                  <Link
                    to="/dashboard"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <FaUsers className="inline-block align-baseline" />
                  <Link
                    to="/leads"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Leads
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <AiFillThunderbolt className="inline-block align-baseline" />
                  <Link
                    to="/deals"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Deals
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <FaDatabase className="inline-block align-baseline" />
                  <Link
                    to="/data"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Sample Data
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <FaUser className="inline-block align-baseline" />
                  <Link
                    to="/users"
                    className="text-black text-xl hover:text-purple-500 font-bold p-3"
                  >
                    Users
                  </Link>
                </li>
                <li className="mr-2 p-2 hover:text-purple-500 border-b-4 border-white hover:border-solid  hover:border-indigo-500">
                  <MdSecurity className="inline-block align-baseline" />
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
