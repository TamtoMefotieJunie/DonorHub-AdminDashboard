import { NotificationsOutlined } from '@mui/icons-material'
import React from 'react'
import profile from '../../assets/images/profile.png'
import SearchInput from '../Inputs/SearchInput'


function Navbar(){
   return(
   <>
   <div className='flex space-x-30 bg-white rounded-xl h-[12%] p-4 '>
      <div className='w-[40%] self-center '>
         <SearchInput type="text" name="search" placeholder="Search..."/>
      </div>
      <div className='w-[60%] justify-end pr-10 items-center flex space-x-5'>
         <div><NotificationsOutlined style={{fontSize:"30"}}/></div>
         
         <div className='rounded-full w-[7%] flex flex-center items-center h-[90%] bg-red-200'>
            <img
            src={profile}
            
            style={{width:"100%",objectFit:"cover",objectPosition:"center", borderRadius:100, height:"100%"}}
            />
         </div>
         <span className='font-semibold text-lg'>Tamto Junie</span>
      </div>
   </div>
   
   </>
   )
}
export default Navbar