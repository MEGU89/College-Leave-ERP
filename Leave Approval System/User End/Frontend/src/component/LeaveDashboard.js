// src/components/LeaveDashboard.js
import React from "react";

const leaveRequests = [
  { id: 1, name: "John Doe", startDate: "2024-11-12", endDate: "2024-11-14", reason: "Family event" },
  // Add more requests here or fetch from a backend
];

const LeaveDashboard = () => {
  const handleApprove = (id) => {
    console.log(`Approved leave request for ID: ${id}`);
    // Logic to update the request status
  };

  const handleReject = (id) => {
    console.log(`Rejected leave request for ID: ${id}`);
    // Logic to update the request status
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Pending Leave Requests</h2>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Student Name</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
            <th className="py-2 px-4">Reason</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((request) => (
            <tr key={request.id} className="border-b">
              <td className="py-2 px-4">{request.name}</td>
              <td className="py-2 px-4">{request.startDate}</td>
              <td className="py-2 px-4">{request.endDate}</td>
              <td className="py-2 px-4">{request.reason}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleApprove(request.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveDashboard;
