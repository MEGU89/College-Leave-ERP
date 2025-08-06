
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';

import Home from './Component/Home/Home'

import Status from './Component/Status/Status';

import UpdateStatus from './Component/Status/UpdateStatus';
import ViewStatus from './Component/Status/ViewStatus';
import Dashboard from './Component/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>

      <Route path='/dashboard' element = {<Dashboard/>} ></Route>
      <Route path='/viewstatus' element = {<ViewStatus/>}></Route>
      <Route path='/updatestatus/:stuId' element = {<UpdateStatus/>}></Route>

      



      
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
