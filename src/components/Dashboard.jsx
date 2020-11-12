import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="flex w-full min-h-screen  bg-gray-300">
        <div className="m-5  flex w-1/4 h-48 rounded-md bg-white shadow-md"></div>
        <div className="m-5 flex w-1/4 h-48 rounded-md bg-white shadow-md"></div>
        <div className="m-5 flex w-1/4 h-48 rounded-md bg-white shadow-md"></div>
        <div className="m-5 flex w-1/4 h-48 rounded-md bg-white shadow-md"></div>
      </div>
    );
  }
}

export default Dashboard;
