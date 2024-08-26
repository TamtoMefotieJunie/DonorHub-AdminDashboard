import { Height, PeopleAltSharp, MoreHoriz, VolunteerActivism,TrendingUpOutlined } from '@mui/icons-material'
import { CircularProgress, LinearProgress } from '@mui/material'

import React from 'react'
import ProgressBar from '../Bar/ProgressBar'


function Cards({icon,value,label,description,increase,stats,statDescription,bg,bg2,text,mt}){
   return(
   <>
   
   <div className=' w-[30%] rounded-lg shadow-xl p-4 border-box h-[90%] '
   style={{ backgroundColor: bg,color:text }} 
   >
                  
        <div className='flex items-center justify-between'>
            <div className='flex flex-row items-center justify-center pl-4'>
                <div className='rounded-lg bg-white mr-5 shadow-lg flex flex-row items-center justify-center ' style={{height:"35px",width:"40px",color:"#CF3304"}}>{icon}</div>
                <div className='font-semibold text-md mr-12'>{label}</div>
            </div>
          
            <MoreHoriz/>
        </div>
        <div className='p-4 mt-1 font-semibold h-[60%]'>
           
            <div className='flex  space-y-5 mb-5 space-x-5'>
                <span className='text-5xl font-bold'>{value}</span>
                <span className=' font-semibold rounded-[50px] items-center justify-center text-center w-[29%] text-sm flex ' 
                
                style={{backgroundColor:bg2,opacity:0.8}}> {increase} </span>
            </div>
            <span className='text-md'>{description}</span>
             
        </div>
        <div className='flex items-center box-sizing box-content justify-around space-x-5'
        style={{marginTop:mt}}>
        {stats}
        
         <span>{statDescription}</span>
        </div>

   </div>
   
   </>
   )
}
export default Cards
