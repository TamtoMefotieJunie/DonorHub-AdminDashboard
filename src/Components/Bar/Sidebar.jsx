import { Dashboard,Inventory,Equalizer, Logout, Biotech, Settings, WalletOutlined, Padding } from '@mui/icons-material';
import InventoryIcon from '@mui/icons-material/Inventory';
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


function Sidebar(){
   return(
   <>
   <div className="w-1/6 h-full bg-white  box-border rounded-md text-center content-center"> 
      <h1 className="font-bold text-2xl p-5 text-[#CF3304]">DONORHUB </h1>
      <br />
      <div className='h-[45%] text-gray-500 box-border'>
         <p className='text-left text-sm text-gray-400 ml-5'>MAIN</p>
         <div className="  box-border p-5  ">
            <NavLink to="/" >
               <div className='flex  space-x-6  p-1 '>
                  <span><Dashboard /></span>
                  <span className=''>Dashboard</span>
               </div>
            </NavLink>
            <NavLink to="/Stock" >
               <div className='flex space-y-6 space-x-6 p-1 '>
                  <span className='mt-6'><Inventory/></span>
                  <span>Inventory</span>
               </div>
            </NavLink>
            <NavLink to="/Orders" >
               <div className='flex space-y-6 space-x-6 p-1'>
                  <span className='mt-6'><WalletOutlined/></span>
                  <span>Requests</span>
               </div>
            </NavLink>
            <NavLink to="/Technician"> 
               <div className='flex space-y-6 space-x-6 w-full p-1'>
                  <span className='mt-6'> <Biotech/> </span>
               <span>Lab Technicians</span>
               </div>
            </NavLink>
         </div>
      </div>
      <div className='h-[10%] text-gray-500  '>
         <p className='text-left text-sm text-gray-400 ml-5'>DATA VISUALIZATION</p>
         <div className=' space-y-6 box-border p-5 place-content-center '>
         <NavLink to="/Chart" style={{display:'flex', marginRight:6, Padding:1 }} > 
            <div className='space-x-6'>
                <span><Equalizer/></span>
               <span>Statistics</span>
            </div>
          </NavLink>
            </div>
      </div>


      
      <div className='h-[35%] place-content-center  '>
         <p className='text-left text-sm text-gray-400 ml-5'>SUPPORT</p>
         <div className='p-5 space-y-6 box-border text-gray-500  place-content-center '>
            
             <NavLink to="/Settings" > 
               <div className='flex space-x-6 p-1 '>
                  <span><Settings/></span>
                  <span>Settings</span>
               </div>
            </NavLink>
            <div className='flex space-x-6 p-1 '>
               <span><Logout/></span>
               <span className='text-gray-500 '>Logout</span>
            </div>
         </div>

      </div>
   </div>
   </>
   )
}
export default Sidebar;