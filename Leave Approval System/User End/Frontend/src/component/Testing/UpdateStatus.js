import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Navbar from '../Navbar'

function UpdateStatus() {
  const { stuId } = useParams();
  const [pic2, setPic2] = useState([]);

  const navigate = useNavigate();


  




  const [values, setValues] = useState({
    name: "",
    collegeId: "",
    department: "",
    typeOfLeave: "",
    startDate: "",
    endDate: "",
    totalDays: "",
    reason: "",
    status: ""
  });








  useEffect(() => {
    fetch(`http://localhost:5000/getstudentleaveinfo/${stuId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setValues({
          ...values,
          name: result.name,
          collegeId: result.collegeId,
          department: result.department,
          typeOfLeave: result.typeOfLeave,
          startDate: result.startDate,
          endDate: result.endDate,
          totalDays: result.totalDays,
          reason: result.reason,
          status: result.status,
        });
        // console.log(result.price)
        // setTitle(result.title)
        // setDesc(result.desc)
        // setPrice(result.price)
        setPic2(result);
        console.log(result);
      });
  }, []);


  const chk = () => {
    console.log(values.status);
    
  }



  const updateItem = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updatestatus/${stuId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const updatedItem = await response.json();
      console.log("Status Updated");
      navigate('/viewstatus')
      // Handle the updated item, update component state, etc.
      // ...
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };



  return <div>

    <div>
      <p>{pic2.name}</p>
      <p>{pic2.collegeId}</p>
      <p>{pic2.department}</p>
      <p>{pic2.typeOfLeave}</p>
      <p>{pic2.startDate}</p>
      <p>{pic2.endDate}</p>
      <p>{pic2.totalDays}</p>
      <p>{pic2.reason}</p>
      <div>
        <label htmlFor="">Select Status:</label>
        <select id="status" value={values.status} onChange={(e) => setValues({
          ...values,
          status: e.target.value
        })}>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <p>Selected Status: {values.status}</p>
      </div>



      <button onClick={() => {updateItem()}}>Update</button>
    </div>

  </div>;
}

export default UpdateStatus;
