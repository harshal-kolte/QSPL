import Login from './Files/Login';
import './App.css';
import { BrowserRouter, Route ,Routes, Outlet  } from 'react-router-dom';
import AddClient from './Files/EmployeeDashboard/AddClient';
import ClientInfo from './Files/EmployeeDashboard/ClientInfo';
import DashBoardNav from './Files/EmployeeDashboard/DashBoardNav'
import SideBar from './Files/EmployeeDashboard/SideBar';  
import AddEmployee from "./Files/AdminDashboard/AddEmployee";
import EmployeeList from "./Files/AdminDashboard/EmployeeList";
import Dashboard from "./Files/AdminDashboard/Dashboard";
import Orders from "./Files/AdminDashboard/Orders";

import Products from "./Files/AdminDashboard/Products";
import Clients from "./Files/AdminDashboard/Clients";
import AddProduct from "./Files/AdminDashboard/AddProduct";
import ClientList from './Files/EmployeeDashboard/ClientList';

function App() {
  return (
    <div>
     
     {/*////////////////////////////////////////////////////////////////////////////implement this code to see the Employee side of the UI */}

    {/* <BrowserRouter>
      <Routes>
        <Route  path="/" element={<div className='flex justify-between'>
          <SideBar/> 
          <Outlet />
        </div>} >
        
        <Route path="/AddClient" element={<AddClient />} />
        <Route path="/Dashboard" element={<DashBoardNav name="king" email="king@gmail.com"/>} />
         <Route path="/ClientList" element={<ClientList/>} />
        <Route
          path="/ClientInfo"
          element={<ClientInfo name="Dr. John Wick" Email="harshalkolte02@gmail.com" phone="012345689" order="10" />}
        /></Route>
        <Route path="/Logout" element={<Login />} />
      </Routes>
    </BrowserRouter> */}




    {/*///////////////////////////////////////////////////////////////////////////////implement this code to see the admin side of the UI */}


    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<div className='flex justify-between'>
          <SideBar/> 
          <Outlet />
        </div>} >
        
        <Route path="/AddClient" element={<AddEmployee />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/ClientList" element={<EmployeeList/>} />
       </Route>
        <Route path="/Logout" element={<Login />} />
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
