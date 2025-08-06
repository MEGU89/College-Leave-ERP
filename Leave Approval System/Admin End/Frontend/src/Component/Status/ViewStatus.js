import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavbarHome from "../navbars/NavbarHome";
import img from '../images/userImage.jpg'
function ViewStatus() {
  const [pic, setPic] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/getleavedata", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPic(result);
        console.log(result); // Log the fetched data
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavbarHome />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Leave Status</h1>
        <div className="flex flex-col items-center">
          {pic && pic.length > 0 ? (
            pic.map((item) => (
              <div
                key={item._id}
                className="w-3/4 border rounded-lg shadow-md p-4 bg-white hover:shadow-lg mb-6"
              >
                <div className="flex gap-20 justify-between">
                  <div>


                    <h3 className="text-lg font-semibold mb-2">Name: {item.name}</h3>
                    <p className="mb-1">
                      <span className="font-medium">College ID:</span> {item.collegeId}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Dept:</span> {item.department}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Type of Leave:</span> {item.typeOfLeave}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Start Date:</span>{" "}
                      {new Date(item.startDate).toLocaleDateString()}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">End Date:</span>{" "}
                      {new Date(item.endDate).toLocaleDateString()}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Total Days:</span> {item.totalDays}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Reason:</span> {item.reason}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Status:</span>{" "}
                      <span
                        className={`${item.status === "Approved"
                          ? "text-green-600"
                          : "text-red-600"
                          } font-medium`}
                      >
                        {item.status}
                      </span>
                    </p>
                  </div>
                  <div>
                    <img src={img} alt="" className="w-60 h-60"/>
                  </div>
                </div>
                <Link to={`/updatestatus/${item._id}`}>
                  <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Update Status
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center">
              No leave requests available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewStatus;
