import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Navbar from '../Components/Bar/Navbar';
import donorAppointment from './../assets/images/appointment.jpg'
import { useNavigate } from "react-router-dom";
import SecondaryButton from '../Components/Button/SecondaryButton';

const Donations = () => {
    let navigate = useNavigate();
const handleSubmit = () => {
  let path = `Stock/Donation/Collection`; 
    navigate(path);
}
  return (
    <div className='w-full space-y-3 h-full overflow-y-hidden'>
        <Navbar />
        <p className='text-[#54C2B5] font-bold text-xl'>Add a donor</p>
        <div className='h-[90%] p-2'>
            <div
                className="h-[50%]  w-full"
                style={{
                    backgroundImage: `url(${donorAppointment})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat:'no-repeat',
                    height: '50%',
                    width: '100%',
                }}
            >
                <div className='bg-[#ffffff]/20 h-full w-full '></div>
            </div>
            <div className='bg-white flex items-center justify-center self-center h-[50%] w-full '>
              <div className='w-[30%] h-[60%] flex flex-col  p-7 rounded-lg bottom-5 bg-white shadow-xl absolute'>
                    <p className='text-lg font-bold'>Donor's information</p>
                    <form action="#" method="POST" className="space-y-3 w-[100%] px-1  h-[93%] ">
                    <div className='space-y-2 pt-2'>
                        <label htmlFor='name' className="block text-sm font-medium leading-5 text-gray-900">
                        Name
                        </label>
                        <input
                            id='name'
                            // value={value}
                            // onChange={onChange}
                            name='Name'
                            type='text'
                            className="block w-[100%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                            
                        />
                    </div> 
                    <div className='space-y-2 pt-2'>
                        <label htmlFor='dob' className="block text-sm font-medium leading-5 text-gray-900">
                            Date of Birth
                        </label>
                        <div className="flex space-x-2">
                        
                            <select
                                id='month'
                                name='month'
                                className="block w-[30%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                            >
                                <option value="">Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <input
                                id='day'
                                name='day'
                                type='number'
                                placeholder="Day"
                                className="block w-[20%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                                min="1"
                                max="31"
                            />
                            <input
                                id='year'
                                name='year'
                                type='number'
                                placeholder="Year"
                                className="block w-[40%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                                min="1900"
                                max={new Date().getFullYear()}
                            />
                        </div>
                    </div>
                    <div className='space-y-2 pt-2'>
                        <label htmlFor='gender' className="block text-sm font-medium leading-5 text-gray-900">
                        Gender
                        </label>
                        <select  className="block w-[100%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div> 
                    <div className='space-y-2 pt-2'>
                        <label htmlFor='collection-center' className="block text-sm font-medium leading-5 text-gray-900">
                       Collection Center
                        </label>
                        <select  className="block w-[100%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2">
                            <option>HCY</option>
                            <option>CPY</option>
                            <option>CMY</option>
                            <option>Bethanie</option>

                        </select>
                    </div> 
                        <SecondaryButton name="CREATE" onSubmit={handleSubmit}/>
                    </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Donations