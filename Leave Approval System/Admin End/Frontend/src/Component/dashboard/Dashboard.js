import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUserAlt, FaChartBar } from "react-icons/fa";
import NavbarHome from "../navbars/NavbarHome"; // Assuming you have a Navbar component

const AdminDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch leave requests, users, and notifications from backend
    fetchLeaveRequests();
    fetchUsers();
    fetchNotifications();
  }, []);

  const fetchLeaveRequests = async () => {
    // Replace with actual fetch call to your API
    setLeaveRequests([
      { id: 1, name: "Mohammad Daud", type: "Sick Leave", status: "Pending" },
      { id: 2, name: "Imran Ahmad", type: "Casual Leave", status: "Approved" },
    ]);
  };

  const fetchUsers = async () => {
    // Replace with actual fetch call to your API
    setUsers([
      { id: 1, name: "Mohammad Daud", role: "Student" },
      { id: 2, name: "Imran Ahmad", role: "Student" },
    ]);
  };

  const fetchNotifications = async () => {
    // Replace with actual fetch call to your API
    setNotifications([
      "New leave request from Mohammad Daud.",
      "Leave status updated for Imran Ahmad.",
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-800 text-white">
        <NavbarHome />
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="flex items-center py-2 hover:bg-blue-700 p-3">
                <FaChartBar className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/manage-users" className="flex items-center py-2 hover:bg-blue-700 p-3">
                <FaUserAlt className="mr-2" /> Manage Users
              </Link>
            </li>
            <li>
              <Link to="/leave-requests" className="flex items-center py-2 hover:bg-blue-700 p-3">
                <FaSearch className="mr-2" /> Leave Requests
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center py-2 hover:bg-blue-700 p-3">
                <FaSearch className="mr-2" /> Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Dashboard Overview */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="font-bold text-lg">Total Requests</h3>
              <p className="text-xl">{leaveRequests.length}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="font-bold text-lg">Pending Requests</h3>
              <p className="text-xl">{leaveRequests.filter(req => req.status === "Pending").length}</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="font-bold text-lg">Approved Requests</h3>
              <p className="text-xl">{leaveRequests.filter(req => req.status === "Approved").length}</p>
            </div>
          </div>

          {/* Leave Request Management */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="font-bold text-xl mb-4">Leave Requests</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search leave requests"
                className="p-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div>
              {leaveRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex justify-between items-center mb-4 border-b pb-4"
                >
                  <div>
                    <p className="font-bold">{request.name}</p>
                    <p>{request.type}</p>
                  </div>
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full ${
                        request.status === "Pending"
                          ? "bg-yellow-300 text-black"
                          : "bg-green-300 text-black"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="font-bold text-xl mb-4">Notifications</h2>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="flex items-center mb-4">
                  <FaBell className="mr-2" />
                  <p>{notification}</p>
                </div>
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </div>

          {/* User Management */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="font-bold text-xl mb-4">Manage Users</h2>
            <div>
              {users.map((user) => (
                <div key={user.id} className="flex justify-between items-center mb-4">
                  <p className="font-bold">{user.name}</p>
                  <span>{user.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="font-bold text-xl mb-4">Settings</h2>
            <p>Manage system settings, leave policies, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
