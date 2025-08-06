import React, { useEffect } from 'react';
import { useState } from 'react';
import Profile from './Profile';
import { Link, useNavigate } from 'react-router-dom';
import NavbarHome from './navbars/NavbarHome';
const Dashboard = () => {

    
    const navigate = useNavigate();

    useEffect(()=>{
        const jsonWebToken = localStorage.getItem('jsonWebToken')
        if(!jsonWebToken){
            navigate('/signUp')
        }
    },[])

    const [leaveRequests, setLeaveRequests] = useState([
        // Add more sample data as needed
    ]);
    const data = [
        {
            image: "./images/banner3.jpg"
        }
    ]


    
    return (

       <div>
       <NavbarHome/>
         <div className="min-h-screen bg-gray-100 p-6">

<header className="bg-white shadow p-6 flex flex-col justify-between ">
    <h1 className="text-xl font-bold m-3">STUDENT PORTAL</h1>
    <Profile data={leaveRequests[0]} />
</header>

<nav className="bg-gray-200 py-3 px-6 mt-6 flex justify-between">
    <Link to={"/"} >
        <p className="nav-item hover:text-gray-300">Home</p>
    </Link>
    <Link to={"/apply"} >
        <p className="nav-item hover:text-gray-300">Apply For Leave</p>
    </Link>
    <Link to={"/leaveStatus"} >
        <p className="nav-item hover:text-gray-300">Leave Status</p>
    </Link>
</nav>

<main className="mt-6">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Leave Requests Summary</h2>
            <ul>
                <li>Total requests: 10</li>
                <li>Pending requests: 5</li>
                <li>Approved requests: 3</li>
                <li>Rejected requests: 2</li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-bold mb-4">Pending Approval</h2>
            <ul className=''>
                {leaveRequests.map(request => (
                    <li key={request.id} className="mb-2">
                        <span className="font-semibold">{request.name}</span>: {request.dates} - {request.reason} ({request.status})
                    </li>
                ))}
            </ul>
        </div>
    </section>
</main>

<footer className="bg-white shadow p-6 mt-6 flex justify-between">
    <div>Contact information : 8040503645</div>
</footer>
</div>
       </div>
    );
};

export default Dashboard;
