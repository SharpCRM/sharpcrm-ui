import MUIDataTable from "mui-datatables";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Deals extends Component {
  render() {
    const data = [
      {
        id: "DL100",
        leadID: "LD1245",
        dealStatus: "IN PROGRESS",
        sampleDataAttachments: "File1,File2",
        finalDataFile: "File1",
        dealValue: "$1245454",
        createdOn: "2020-10-14 06:00:12",
        lastUpdatedOn: "2020-10-20 06:00:12"
      },
      {
        id: "DL101",
        leadID: "LD1246",
        dealStatus: "IN PROGRESS",
        sampleDataAttachments: "File1,File2",
        finalDataFile: "File1",
        dealValue: "$20000",
        createdOn: "2020-10-14 06:00:12",
        lastUpdatedOn: "2020-10-20 06:00:12"
      },
      {
        id: "DL102",
        leadID: "LD1247",
        dealStatus: "CLOSED",
        sampleDataAttachments: "File1,File2",
        finalDataFile: "File1",
        dealValue: "$15000",
        createdOn: "2020-10-14 06:00:12",
        lastUpdatedOn: "2020-10-20 06:00:12"
      }
    ];

    return (
      <div className="mr-6 p-2">
        <div className="flex w-full">
          <div className="m-5  flex w-full h-12 rounded-md bg-white shadow-md">
            <Link to="newlead">Add Deal</Link>
          </div>
        </div>
        <h2>Total count of Deals: {data.length}</h2>
        <table className="table-auto bg-white rounded border">
          <tr className="bg-blue-200">
            <th>Deal ID</th>
            <th>Lead ID</th>

            <th>Deal Status</th>
            <th>Sample Data Attachments</th>
            <th>Final Data File</th>
            <th>Deal Value</th>
            <th>Created on</th>
            <th>Last Updated</th>
          </tr>
          {data.map(item => (
            <tr className=" px-4 py-2 odd:bg-gray-200" key={item.id}>
              <td className="px-4 py-2">
                <Link to={`/deals/${item.id}`}>{item.id}</Link>
              </td>

              <td className=" px-4 py-2">{item.leadID}</td>
              <td className=" px-4 py-2">{item.dealStatus}</td>
              <td className=" px-4 py-2">{item.sampleDataAttachments}</td>
              <td className=" px-4 py-2">{item.finalDataFile}</td>
              <td className=" px-4 py-2">{item.dealValue}</td>
              <td className=" px-4 py-2">{item.createdOn}</td>
              <td className=" px-4 py-2">{item.lastUpdatedOn}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Deals;
