import { Dashboard,Inventory,Equalizer, Logout, Biotech, Settings, WalletOutlined, AdminPanelSettings, LocalHospital, VolunteerActivism, Person } from '@mui/icons-material';
import { userLinks } from '../../Utils/PrivateRoute';
import logo from '../../assets/images/logo3.png'
import React,{useState} from 'react'
import {  NavLink } from 'react-router-dom'


function Sidebar({role}){
  

   // Find the links corresponding to the user's role
   const currentLinks = userLinks.find(link => link.key === role)?.links || [];
   return(
   <>
   <div className="w-1/6 h-full bg-white  box-border rounded-md text-center content-center"> 
         <div className='flex flex-row self-center p-3 space-x-2 justify-center h-[15%] items-center'>
            <img
               alt="Your Company"
               src={logo}
               className="h-[87%] rounded-full  w-[55%]"
            />
            <h2 className='text-xl text-[#CF3304]  flex-1 font-bold'>DONORHUB</h2>
         </div>
      <div className='h-[45%] text-gray-500 box-border'>
         <p className='text-left text-sm text-gray-400 ml-5'>MAIN</p>
         <div className="  box-border pl-5">
         {currentLinks.map((link, index) => (
               <NavLink key={index} to={link.path}>
                     <div className='flex items-center space-y-4 space-x-6 p-1'>
                        <span className='mt-4'>{link.icon}</span>
                        <span>{link.label}</span>
                     </div>
               </NavLink>
            ))}
         </div>
      </div>
      <div className='h-[9%] text-gray-500  '>
         <p className='text-left text-sm text-gray-400 ml-5'>DATA VISUALIZATION</p>
         <div className=' space-y-6 box-border p-5 place-content-center '>
         <NavLink to="Chart" style={{display:'flex', marginRight:6, Padding:1 }} > 
            <div className='space-x-6'>
                <span><Equalizer/></span>
               <span>Statistics</span>
            </div>
          </NavLink>
            </div>
      </div>
      <div className='h-[34%] place-content-center  '>
         <p className='text-left text-sm text-gray-400 ml-5'>SUPPORT</p>
         <div className='p-4 space-y-4 box-border text-gray-500 '>
            
             <NavLink to="Settings" > 
               <div className='flex space-x-6  items-center p-1 '>
                  <span><Settings/></span>
                  <span>Settings</span>
               </div>
            </NavLink>
            <div className='flex space-x-6  items-center p-1 '>
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