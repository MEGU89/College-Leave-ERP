import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import img from "../images/userImage.jpg";
import NavbarHome from "../navbars/NavbarHome";

function UpdateStatus() {
  const { stuId } = useParams();
  const [pic2, setPic2] = useState({});
  const [values, setValues] = useState({
    name: "",
    collegeId: "",
    department: "",
    typeOfLeave: "",
    startDate: "",
    endDate: "",
    totalDays: "",
    reason: "",
    status: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/getstudentleaveinfo/${stuId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setValues(result);
        setPic2(result);
      });
  }, [stuId]);

  const updateItem = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updatestatus/${stuId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Status Updated");
        navigate("/viewstatus");
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div>
      <NavbarHome />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Update Leave Status</h1>
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Student Details</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="w-full lg:w-1/2">
              <p className="text-gray-700 mb-2">
                <strong>Name:</strong> {pic2.name}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>College ID:</strong> {pic2.collegeId}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Department:</strong> {pic2.department}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Type of Leave:</strong> {pic2.typeOfLeave}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Start Date:</strong> {new Date(pic2.startDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>End Date:</strong> {new Date(pic2.endDate).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Total Days:</strong> {pic2.totalDays}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reason:</strong> {pic2.reason}
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <img src={img} alt="User" className="w-70 h-70 rounded shadow-md" />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="status" className="block text-gray-800 font-medium mb-2">
              Select Status:
            </label>
            <select
              id="status"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={values.status}
              onChange={(e) =>
                setValues({
                  ...values,
                  status: e.target.value,
                })
              }
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
            <p className="text-gray-600 text-sm mt-2">Selected Status: {values.status}</p>
          </div>

          <button
            onClick={updateItem}
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-lg font-medium"
          >
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateStatus;
