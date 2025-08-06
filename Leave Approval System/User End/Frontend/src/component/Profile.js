import React from 'react'
// import { FaIdCard } from "react-icons/fa";
import logo from '../component/images/logo.png'

const Profile = ({ data }) => {
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;


    return (
        // <div className='flex border-2 p-2 gap-5'>
        //     <div>
        //         <img src={user.image} alt="" className='w-40 h-25' />
        //     </div>
        //     <div className='flex flex-col gap-2 '>
        //         <h1 className='text-3xl font-bold'>Student Details</h1>
        //         <h2 className='text-xl font-bold'>Name : {user.name} </h2>
        //         <h3 className='text-xl font-bold'>Email : {user.email} </h3>
        //         <h3 className='text-xl font-bold'>Phone : {user.phone}</h3>
        //         <h3 className='text-xl font-bold'>College Id : {user.collegeId}</h3>
        //         <h3 className='text-xl font-bold'>Branch : MCA</h3>
        //     </div>

        // </div>

        <div className='drop-shadow-xl'>
            <div className='bg-[#23304f] p-3 flex justify-between flex-row'>
                <img src={logo} alt="logo" srcset="" className='h-5 w-15' />
                {/* <FaIdCard className='h-5 w-5 text-white' /> */}
            </div>
            <div className='flex gap-20 p-3 m-2'>
                <div className='border-2'>
                    <img src={user.image} alt="image" className='w-40 h-40' />
                </div>
                <div>
                    <h2 className='flex gap-3 font-bold'>Name : <p className='font-normal text-[#1262B8]'>{user.name}</p></h2>
                    <h2 className='flex gap-3 font-bold'>Institute : <p className='font-normal text-[#1262B8]'>KIET Group Of Institution</p></h2>
                    <h2 className='flex gap-3 font-bold'>Email : <p className='font-normal text-[#1262B8]'>{user.email}</p></h2>
                    <h2 className='flex gap-3 font-bold'>Phone : <p className='font-normal text-[#1262B8]'>{user.phone}</p></h2>
                    <h2 className='flex gap-3 font-bold'>Branch : <p className='font-normal text-[#1262B8]'>MCA</p></h2>
                    <h2 className='flex gap-3 font-bold'>Id : <p className='font-normal text-[#1262B8]'>{user.collegeId}</p></h2>
                </div>
            </div>

        </div>
    )
}

export default Profile;
