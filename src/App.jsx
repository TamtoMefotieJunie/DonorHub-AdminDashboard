import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './View/Dashboard';
import DashboardRight from './components/DashboardRight';
import Stock from './View/Stock';
import Orders from './View/Orders';
import Technician from './View/Technician';
import Settings from './View/Settings';
import Notification from './View/Notification';
import Statistics from './Components/Charts/Statistics';
import AuthContainer from './View/LoginSignUp';
import Donations from './View/Donations';
import BloodCollection from './View/BloodCollection';
import NewDonation from './View/NewDonation';
import Hospitals from './View/Hospitals';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element= {<DashboardRight/>} />
          <Route path="/Technician" element={<Technician/>} exact={true} />
          <Route path="/Stock" element={<Stock/>} exact={true} />
          <Route path="/Orders" element={<Orders/>} exact={true} />
          <Route path="/Settings" element={<Settings/>} exact={true}/>
          <Route path="/Notification" element={<Notification/>} exact={true}/>
          <Route path='/Chart' element={<Statistics/>}/>
          <Route path='/Donation' element={<Donations/>}/>
          <Route path='/Collection' element={<BloodCollection/>}/>
          <Route path='/NewDonation' element={<NewDonation/>}/>
          <Route path='/Hospital' element={<Hospitals/>}/>
        </Route>
        </Routes>

      </BrowserRouter>
      {/* <AuthContainer/> */}
    </>
  )
}

export default App
