import React, { useEffect, useState } from "react";
import "./LeaveStatus.css";
import NavbarHome from "./navbars/NavbarHome";

// Sample leave data for a single student
const studentLeaveData = {


  name: "Mohammad Daud",
  studentId: "2426MCA590",
  leaves: [
    { id: 1, date: "2024-11-10", reason: "Medical", status: "Approved" },
    { id: 2, date: "2024-11-15", reason: "Personal", status: "Pending" },
    { id: 3, date: "2024-11-20", reason: "Family Emergency", status: "Rejected" },
    { id: 4, date: "2024-11-25", reason: "Vacation", status: "Approved" },
  ],


};

function LeaveStatus() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/getleavedata', {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }

    })
      .then(res => res.json())
      .then((result) => {
        setData(result)
      })
  }, [])



  return (
    <div>
      <NavbarHome />
      <div className="student-leave-status-container">
        <h2 className="title text-xl font-bold">Student Name : {studentLeaveData.name}</h2>
        <p className="student-id text-xl font-bold">Student ID: {studentLeaveData.studentId}</p>

        <table className="leave-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentLeaveData.leaves.map((leave) => (
              <tr key={leave.id} className={`status-${leave.status.toLowerCase()}`}>
                <td>{leave.date}</td>
                <td>{leave.reason}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default LeaveStatus;
