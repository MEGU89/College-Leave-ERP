import React, { useState } from 'react';
import Profile from './Profile';
import Dropdown from 'react-bootstrap/Dropdown';
import ApplySection from './ApplySection';
import NavbarHome from './navbars/NavbarHome';


const Apply = () => {
    const [leaveRequests, setLeaveRequests] = useState([
        { id: 1, name: 'Mohammad Daud', dates: '2024-11-10 to 2024-11-15', reason: 'Vacation', status: 'Pending', collegeId: "2426MCA869", phone: 8840505312, email: "daudansarikld@gmail.com", branch: "MCA" },
        { id: 2, name: 'John2 Doe', dates: '2024-11-10 to 2024-11-15', reason: 'Vacation', status: 'Pending', collegeId: "2426mca768", phone: 758472845, email: "jhon@gmail.com", branch: "B Tech" },

        // Add more sample data as needed
    ]);
    return (
        <div>
        <NavbarHome/>
            <div>
            {/* <Profile data={leaveRequests[0]} /> */}
            <header className="bg-white shadow p-6 flex flex-col justify-between mx-48 mt-5 rounded items-center">
                <h1 className="text-xl font-bold m-3">STUDENT PORTAL</h1>
                <Profile data={leaveRequests[0]} />
            </header>
            <div>
                <ApplySection/>
            </div>
        </div>
        </div>
    )
};

export default Apply;
