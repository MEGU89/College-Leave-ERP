import React, { useState, useEffect } from 'react'
import logo from '../images/default_logo1.png'
import image from '../images/banner3.jpg'
import { useNavigate } from 'react-router-dom'
import NavbarLogin from '../navbars/NavbarLogin'

function SignUp() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const [pic, setPic] = useState("")
    const [url, setUrl] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        if (url) {
            fetch("http://localhost:5000/signUp", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    //   "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    image: url,
                    email: email,
                    password: password,
                    collegeId: collegeId
                    //pic is not setting 

                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        // notifyA(data.error)
                        console.log(data.error)
                    } else {
                        // notifyB(data.message)
                        console.log(data.message);
                        // alert(data.message)
                        navigate('/')
                    }
                    console.log(data)
                })
                .catch(err => console.log(err))
        }

    }, [url]);

    const check = () => {
        console.log(name, email, phone, password, collegeId);
    }

    const loadFile = (event) => {
        var output = document.getElementById('noPersonImage');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    }

    

    const post = () => {
        // console.log(heading,desc,price,pic)
        const data = new FormData()
        data.append("file", pic)
        data.append("upload_preset", "approval_system")
        data.append("cloud_name", "daud3283")
        fetch("https://api.cloudinary.com/v1_1/daud3283/image/upload", {
            method: "post",
            body: data
        }).then(res => (res.json()))
            .then(data => setUrl(data.url))
            .catch(err => console.log(err))
    }

    const postData = () => {
        fetch('http://localhost:5000/signUp', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                password: password,
                collegeId: collegeId
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error")
                } else {
                    console.log("Data saved successfully")
                }
            })

    }

    return (
        <div>
        <NavbarLogin/>
            <div className='flex  justify-center items-center'>
            <div className='border-2 w-2/6 m-3'>
                <div className=' bg-slate-800 p-4 items-center flex justify-center text-white font-bold text-2xl'><h1>KIET SIGN-UP</h1></div>
                <div className='mt-2 flex flex-col gap-2  items-center'>
                    <div className='flex flex-col gap-2 items-center justify-center  '>
                        <div >
                            <label htmlFor="" className='font-bold'>Name :</label>
                            <input value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} type="text" required placeholder='name' className='border-2 ml-9 p-1' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>Email :</label>

                            <input value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email" required placeholder='email' className='border-2 ml-10  p-1' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>Phone :</label>

                            <input value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                            }
                            } type="number" name="" id="" placeholder='phone' required className='border-2 ml-9 p-1' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>Password :</label>

                            <input value={password} onChange={(e) => {
                                setPassword(e.target.value);
                            }} type="password" required placeholder='password' className='border-2 ml-4  p-1' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-bold'>College Id :</label>

                            <input value={collegeId} onChange={(e) => {
                                setCollegeId(e.target.value);
                            }} type="text" required placeholder='college id' className='border-2 ml-3 p-1' />
                        </div>
                    </div>
                    <div className='flex gap-2 justify-center items-center '>
                        <img src={image} alt="" className='h-20 w-30 border-2 p-1' id='noPersonImage' />
                        <input type="file" accept='image/*' className='file'
                            onChange={
                                (event) => {
                                    loadFile(event)
                                    setPic(event.target.files[0])
                                }} />

                    </div>
                    <button onClick={() => {
                        // postData();
                        post();
                    }} className='rounded-full  p-3 border-2 px-20 py-2 text-white bg-sky-500 hover:bg-sky-700 mb-2'>Submit</button>
                </div>

            </div>

        </div>
        </div>
    )
}

export default SignUp