import React from 'react'
import Navbar from '../Components/Bar/Navbar'
import Cards from './Cards/Card'
import { AutoGraph, PeopleAltSharp,VolunteerActivism,FilterList, ArrowDropDown, BarChart, Backpack } from '@mui/icons-material'
import ProgressBar from './Bar/ProgressBar'




function DashboardRight({...props}){
   return(
   <>
   <div className='w-full space-y-3 h-full overflow-y-hidden '>
            <Navbar/>
        <div>
            <p className='text-[#54C2B5] font-bold text-2xl'>Welcome Back, <span>Junie</span></p>
        </div>
        <div className='w-full  h-[45%]  justify-start flex space-x-14 items-center'>
           
            <Cards
            icon={<AutoGraph/>}
            label="Overall Requests"
            bg="#CF3304"
            text="white"
            increase="+25.55%"
            statDescription="over 10 today"
            value="100.01"
            bg2="silver"
            description="increase in data by 50 since the last 7 days from 20 to 70"
            stats={<BarChart style={{width:70,height:"10%",marginRight:"50"}}/>}
            />

            <Cards value="50.00" label="Available Packs" 
            bg2="#CF3304"
            mt={25}
            icon={<Backpack/>}
            increase="+5.2%" stats={<ProgressBar value={0.5}/>} 
            statDescription="5 today"
            description="Donations received for the last 7 days from 10% to 25%" />

            <Cards value="30.0" label="Donors" 
            bg2="#CF3304"
            mt={25}
            icon={<VolunteerActivism/>}
            increase="+5.2%" stats={<ProgressBar value={0.5}/>} 
            statDescription="12 today"
            description="Donors received for the last 7 days from 10% to 25%" />
        </div>
    
   </div>
   </>
   )
}
export default DashboardRight