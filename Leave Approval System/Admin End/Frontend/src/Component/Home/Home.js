import React from 'react'
import './Home.css'
import NavbarHome from '../navbars/NavbarHome'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()

  return (
    <div> 

      <NavbarHome/>
      <div className="container">
      <h1 className='img-top-heading'><marquee behavior="scroll" direction="left" scrollamount="5">
        The institute has been accredited by NAAC with Grade 'A+' and its programmes (CSE, ECE, EEE, IT, CE, ME), MCA, MBA, and Pharmacy are NBA accredited.
      </marquee></h1>
      <div className="page-container">
      </div>
      <div className="about">
        <h1>About KIET</h1>
        <p>
        KIET Group of Institutions strives to create technically competent professionals who can contribute productively towards the betterment of the Industry and the Society as a whole.
        </p>
        <p>
        With a rich alumni base of 20000+ students spread in all the nooks and corners of the world, KIET Group of Institutions is moving efficiently towards its vision of shaping young minds with skill-oriented & value based education as these alumni serve the dual purpose of mentoring the present students, as well as opening new doors for them.
        </p>
      </div>
    </div>
    <button onClick={() => {navigate('/viewstatus')}}>Go to all  Status</button>

    </div>

  )
}

export default Home