
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { Filter, Filter1Outlined, FilterList, HealthAndSafety } from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
const History = () => {
  return (
    <>
    <div className="p-4 h-full">
        <div className='flex p-1 items-center justify-between'>
          <p className='font-bold text-gray-500 text-xl'>Last Donations</p>
          <div className='flex items-center w-[25%] justify-around'>
                <button  className='flex p-2 w-[60%] items-center bg-gradient-to-b from-[#CF3304] to-[#CF3304]/70 color-white text-white justify-around rounded-lg'>
                    <HealthAndSafety />
                    <p className='text-md font-bold'>Add a Donation</p>
                </button>
             </div>
        </div>
        <div className='bg-[#e5e5e5]/10 p-2 rounded-xl mt-2 h-[80%]'>
            
            <div className=' w-full flex items-center border-b-2 border-b-gray-300 justify-around p-2 text-base font-bold text-right'>
                <span className=''>Group</span>
                <span>Quantity</span>
                <span>Collection date</span>
                <span>Type</span>
                <span>Expiration date</span>
                <span>Component</span>
            </div>
                
          
        </div>
    </div>
    </>
  )
}

export default History