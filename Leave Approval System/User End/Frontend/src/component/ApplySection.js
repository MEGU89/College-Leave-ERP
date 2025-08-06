import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {useNavigate} from 'react-router-dom'

const ApplySection = () => {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [department, setDepartment] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState('');
    // const [attachment, setAttachment] = useState(null);

    const calculateTotalDays = () => {
        if (startDate && endDate) {
            const diffTime = Math.abs(endDate - startDate);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        return 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            name,
            studentId,
            department,
            leaveType,
            startDate,
            endDate,
            totalDays: calculateTotalDays(),
            reason,
            // attachment,
        });

        
        fetch("http://localhost:5000/leavedata", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name : name,
                collegeId : studentId,
                department : department,
                typeOfLeave : leaveType,
                startDate : startDate,
                endDate : endDate,
                totalDays : calculateTotalDays(),
                reason : reason,
    
            })
          }).then(res => res.json())
            .then(data => {
              if (data.error) {
                console.log(data.error)
              } else {
                console.log(data.message)
                // alert(data.message)
                // navigate('/')
              }
              console.log(data)
            })
            .catch(err => console.log(err))



        
    };

    return (
        <div>
            <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-6 bg-white mb-5 mt-5">
            <h2 className="text-3xl font-bold text-center mb-6">Leave Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2">Student ID</label>
                        <input
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Enter your ID"
                            required
                        />
                    </div>
                </div>

                {/* Department and Leave Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-lg font-medium mb-2">Department</label>
                        <input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Enter your department"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2">Type of Leave</label>
                        <select
                            value={leaveType}
                            onChange={(e) => setLeaveType(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        >
                            <option value="" disabled>
                                Select Leave Type
                            </option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Sick Leave">Medical</option>
                            <option value="Maternity Leave">Placement/Event</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Dates and Total Days */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-lg font-medium mb-2">Start Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholderText="Select start date"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2">End Date</label>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholderText="Select end date"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2">Total Days</label>
                        <input
                            type="text"
                            value={calculateTotalDays()}
                            readOnly
                            className="w-full border rounded-md p-2 bg-gray-100 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Reason for Leave */}
                <div>
                    <label className="block text-lg font-medium mb-2">Reason for Leave</label>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Describe the reason for leave"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default ApplySection;
