import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function ViewStatus() {


  const [pic, setPic] = useState("");

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
        // setPosts(result)
        console.log(pic);
      });
  }, []);



  return (
    <div>



      <div>
        <div className="main_body_itmes">
          {pic && pic.length > 0 ? ( // Check if pic is not empty
            pic.map((pics) => (
              <div className="crd" key={pics._id} style={{ display: "flex", gap: "10px" }}>
                {" "}
                {/* Add a key for each item */}
                <div style={{ border: "1px solid red" }} className="leaveData">
                  <h3>Name: {pics.name}</h3>
                  <h3>College ID: {pics.collegeId}</h3>
                  <h3>Dept : {pics.department}</h3>
                  <h3>Type Of Leave : {pics.typeOfLeave}</h3>
                  <h3>startDate : {pics.startDate}</h3>
                  <h3>endDate : {pics.endDate}</h3>
                  <h3>totalDays : {pics.totalDays}</h3>
                  <h3>reason : {pics.reason}</h3>
                  <h3>Status : {pics.status}</h3>





                  <Link to={`/updatestatus/${pics._id}`}>
                    <button style={{ border: "1px solid red" }}>TestButton</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No items available</div> // Optional fallback message
          )}
        </div>
      </div>


    </div>
  )
}

export default ViewStatus