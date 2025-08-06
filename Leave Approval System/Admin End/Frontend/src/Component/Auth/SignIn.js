import React, { useState } from 'react'
import image from '../images/default_logo1.png'
import {useNavigate} from 'react-router-dom'
// import NavbarLogin from './navbars/NavbarLogin'

import NavbarLogin from '../navbars/NavbarLogin'

function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const chk = () => {
    console.log(email, password)
  }

  const authorize = ()=>{
    fetch('http://localhost:5000/adminsignin',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        console.log(data.error)
      } else {
        console.log(data)
        localStorage.setItem('jsonWebToken',data.token)
        localStorage.setItem('user',JSON.stringify(data.user))
        navigate('/')

      }
    })

  }

  return (
    <div>
    <NavbarLogin/>
      <div className='flex gap-5 items-center m-5 justify-center'>
      <div className="left-image text-sky-400 ">
        <img src="http://www.kiet.edu/uploads/department/MCA/548Sep2023.jpg" alt="" className='rounded-md' />
      </div>
      <div className="login-form flex flex-col gap-5 items-center  p-3 border-[#CED4DA]">
        <div className="logo">
          <img src={image} alt="image" className='fill-blue-500 w-60 h-30' />
        </div>
        <div className=' flex flex-col items-center'>
          <h1>KIET GROUP OF INSTITUTIONS</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <label htmlFor="">Username</label>
            <input value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} type="text" placeholder='username' required className='border-2  rounded-md ml-3 p-1' />
          </div>
          <div>
            <label htmlFor="" className=' pl-1'>Password</label>
            <input value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} type="password" name="" id="" placeholder='Password' className='border-2  rounded-md ml-3 p-1' required />

          </div>


          <div className="flex items-center justify-center">
            <button onClick={() => {
              authorize()
            }} className='rounded-full  p-3 border-2 px-20 py-2 text-white bg-sky-500 hover:bg-sky-700 '>Submit</button>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn
