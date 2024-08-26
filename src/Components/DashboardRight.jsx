import React from 'react'
import Navbar from '../Components/Bar/Navbar'
import Cards from './Cards/Card'
import { AutoGraph, PeopleAltSharp,VolunteerActivism,FilterList, ArrowDropDown, BarChart, Backpack, Opacity } from '@mui/icons-material'
import ProgressBar from './Bar/ProgressBar'
import admin from '../assets/images/admin2.jpg'
import BloodCard from './Cards/BloodCard'
import DonorActiveState from './Cards/DonorActiveState'




function DashboardRight({...props}){
   return(
   <>
   <div className='w-full space-y-3 h-full overflow-y-hidden '>
            <Navbar/>
         <p className='text-[#54C2B5] font-bold text-2xl'>Welcome Back, <span>Junie</span></p>
        <div className='w-full h-[40%] justify-start flex space-x-14 items-center'>
           
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
            stats={<BarChart style={{width:60,height:"9%",marginRight:"50"}}/>}
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
            increase="+5.2%" stats={<ProgressBar value={0.5} progress="#CF3304"/>} 
            statDescription="12 today"
            description="Donors received for the last 7 days from 10% to 25%" />
        </div>
        
        <div className='items-center justify-center h-[40%] space-x-3 flex'>
            
           <div className=' h-full w-[60%] bg-white rounded-xl space-y-2 p-4'>
                <div className='items-center justify-between flex'>
                    <p className='text-[#54C2B5] font-bold text-xl'>Blood Groups running out of stock</p>
                    <span className='rounded-xl text-white bg-gradient-to-b from-[#54C2B5] to-[#e5e5e5]/90 font-semibold bg-[#54C2B5] p-2 text-center w-[15%]'>View All</span>
                </div>
                <div className='h-full'
                    style={{backgroundImage:`url(${admin})`,backgroundSize:"cover", backgroundPosition:"center"}}>
                    <div className='bg-[#54C2B5]/45 w-full h-full' style={{ zIndex: 1 }}>
                    

                        <div className='flex text-xl text-white font-bold p-2 items-center justify-around w-full '>
                            <span>Group</span>
                            <span className=''>Component</span>
                            <span>Type</span>
                            <span>Status</span>

                        </div>
                        <BloodCard group="AB+" type="Simple" component="Red Blood Cell only" status="Less than 10 left" />
                        <BloodCard group="O-" type="Quadruple" component="RBC / PL / WBC / PLT" status="Less than 5 left" />
                        <BloodCard group="B-" type="Double" component="Red Blood Cell/WBC" status="Less than 10 left" />
                        <BloodCard group="O+" type="Tripple" component="RBC / PLT / WBC" status="Less than 10 left" />

                    </div>
                </div>
           </div>
            <div className='rounded-lg p-1 bg-white h-full shadow w-[50%]'>
                <div className=' h-full w-full  rounded-xl space-y-2 p-4'>
                    <div className='items-center justify-between flex'>
                        <p className='text-[#54C2B5] font-bold text-xl'>Donor active state</p>
                        <span className='rounded-xl text-white bg-gradient-to-b from-[#54C2B5] to-[#e5e5e5]/90 font-semibold bg-[#54C2B5] p-2 text-center w-[15%]'>View All</span>
                    </div>
                    <div>
                       <DonorActiveState value="0.3" name="Leonel Tamto" donations="2 Donations" />
                       <DonorActiveState value="0.7" name="Charlin Deffo" donations="6 Donations" />
                       <DonorActiveState value="0.5" name="Cedric Tamo" donations="3 Donations" />
                       <DonorActiveState value="0.2" name="Franck Tamto" donations="1 Donations" />
                    </div>
                </div>
            </div>
        </div>

    
   </div>
   </>
   )
}
export default DashboardRight