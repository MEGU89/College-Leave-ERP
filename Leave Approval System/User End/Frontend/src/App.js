import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Apply from './component/Apply';
import Dashboard from './component/Dashboard';
import SignIn from './component/SignIn';
import LeaveStatus from './component/LeaveStatus';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './component/Auth/SignUp';


import UpdateStatus from './component/Testing/UpdateStatus';

import ViewStatus from './component/Testing/ViewStatus';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/apply" element={<Apply/>}></Route>
      <Route path="/leaveStatus" element={<LeaveStatus/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/signIn" element={<SignIn/>}></Route>
      <Route path='/signUp' element = {<SignUp/>}></Route>
      <Route path='/viewstatus' element = {<ViewStatus/>}></Route>
      <Route path='/updatestatus/:stuId' element = {<UpdateStatus/>}></Route>
    </Routes>
    </div>
  </BrowserRouter>

  );
}

export default App;
