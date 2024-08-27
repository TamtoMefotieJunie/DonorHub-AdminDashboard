import React from 'react'
import ContactInput from '../Components/Inputs/FormInput'
import { Phone, Work,LocationCity } from '@mui/icons-material'

import TertiaryButton from '../Components/Button/TertiaryButton'

const NewDonation = () => {
    
  return (
    
    <>
        <div className="p-4 h-full">
            <h2 className='text-[#54C2B5] font-bold text-2xl border-b-2 border-b-gray-300'>New Donation </h2>
            <ul className='flex text-lg text-gray-400 justify-around gap-20'>
                <li>Donation Info</li>
                <li>Duration of Collection</li>
                <li>Donor Evualation</li>
            </ul>
            <form action="" method='POST' className=''>
            <div className='flex text-lg text-gray-400 justify-between h-full'>
                <div className='w-[33%] h-[60%]  pl-2'>
                  
                    <div className="mt-4 text-lg space-y-2">
                        <ContactInput label="Date" name='date' type='date' id='date'/>
                    </div>
                    <div className="mt-4 text-lg space-y-2">
                        <label htmlFor="pack" className='block text-base font-medium leading-6 text-gray-900'>
                            Type of Pack
                        </label>
                        <select id='pack' className='block text-base w-[80%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2'>
                            <option value="Simple/Male">Simple/Male</option>
                            <option value="Simple/Female">Simple/Female</option>
                            <option value="Double/Male">Double/Male</option>
                            <option value="Double/Female">Double/Female</option>
                            <option value="Tripple/Male">Tripple/Male</option>
                            <option value="Tripple/Female">Tripple/Female</option>
                            <option value="Quadriple/Male">Quadriple/Male</option>
                            <option value="Quadriple/Female">Quadriple/Female</option>
                        </select>
                  </div>
                  <div className="mt-4 text-lg space-y-2">
                        <label htmlFor="component" className='block text-base font-medium leading-6 text-gray-900'>
                            Blood Component
                        </label>
                        <select id='pack' className='block text-base w-[80%] rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2'>
                            <option value="Red blood Cell only">Red blood Cell only</option>
                            <option value="Plasma only">Plasma only</option>
                            <option value="platelets only">platelets only</option>
                            <option value="RBC/PLT">RBC/PLT</option>
                            <option value="RBC/PLT/PL">RBC/PLT/PL</option>
                            <option value="RBC/PLT/PL/Cryoprecipitatee">RBC/PLT/PL/Cryoprecipitate</option>
                        </select>
                  </div>
                  
                </div>
                <div className=' h-[60%] p-4 w-[32%]'>
                    <div className="flex mt-5 space-x-2">
                        <label htmlFor='StartTime' className="block text-base font-medium leading-5 text-gray-900">
                            Starting Time:
                        </label>
                        <input
                            id='hour'
                            name='hour'
                            type='number'
                            placeholder="Hour"
                            className="block w-[25%] rounded-md text-base text-gray-900 shadow-sm border border-1 outline-none pl-2"
                            max="12"
                            min="1"

                        />
                        <input
                            id='minute'
                            name='minute'
                            type='number'
                            placeholder="Minutes"
                            className="block w-[25%] rounded-md text-base text-gray-900 shadow-sm border border-1 outline-none pl-2"
                            max="59"
                            min="1"
                        />
                        <select className="block w-[20%] rounded-md text-base text-gray-900 shadow-sm border border-1 outline-none pl-2">
                            <option value="1">AM</option>
                            <option value="2">PM</option>
                        </select>
                    </div>
                    <div className="flex mt-5 space-x-2">
                        <label htmlFor='EndTime' className="block text-base font-medium leading-5 text-gray-900">
                            Ending Time:
                        </label>
                        <input
                            id='hour'
                            name='hour'
                            type='number'
                            placeholder="Hour"
                            className="block w-[25%] rounded-md text-base text-gray-900 shadow-sm border border-1 outline-none pl-2"
                            max="12"
                            min="1"

                        />
                        <input
                            id='minute'
                            name='minute'
                            type='number'
                            placeholder="Minutes"
                            className="block w-[25%] rounded-md text-base text-gray-900 shadow-sm border border-1 outline-none pl-2"
                            max="59"
                            min="1"
                        />
                        <select className="block w-[20%] rounded-md text-base text-gray-900 shadow-sm border border-1 outline-none pl-2">
                            <option value="1">AM</option>
                            <option value="2">PM</option>
                        </select>
                    </div>
                </div>
                <div className=' p-4 h-[60%] w-[33%]'>
                    <div className="flex mt-5  space-x-2">
                        <label htmlFor='Weight' className="block mt-1 text-base font-medium leading-5 text-gray-900">
                         Weight:
                        </label>
                        <input
                            id='Weight'
                            name='weight'
                            type='number'
                            placeholder="weight"
                            className="block w-[70%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                        />
                        <p className='text-gray-500 text-base'>Kg</p>
                    </div>
                    <div className="flex mt-5  space-x-2">
                        <label htmlFor='haemoglobin' className="block mt-1 text-base font-medium leading-5 text-gray-900">
                         Hb:
                        </label>
                        <input
                            id='haemoglobin'
                            name='hb'
                            type='number'
                            placeholder="Hb"
                            className="block w-[70%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                        />
                        <p className='text-gray-500 text-base'> g/dl</p>
                        <select id=" haemoglobin" className='block w-[80%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2'>
                            <option value="Normal">Normal</option>
                            <option value="Mild anemia">Mild anemia</option>
                            <option value="Moderate anemia">Moderate anemia</option>
                            <option value="Severe Anemia">Severe Anemia</option>
                        </select>
                    </div>
                    <div className="flex mt-5  space-x-2">
                        <label htmlFor='bloodPressure' className="block mt-1 text-base font-medium leading-5 text-gray-900">
                        blood Pressure:
                        </label>
                        <input
                            id='bloodPressure'
                            name='bloodPressure'
                            type='number'
                            placeholder=""
                            className="block w-[20%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                        />
                        <p>/</p>
                        <input
                            id='bloodPressure'
                            name='bloodPressure'
                            type='number'
                            placeholder=""
                            className="block w-[20%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                        />
                        <p className='text-gray-500 text-base'> mmHg</p>
                    </div>
                    <div className="flex mt-5  space-x-2">
                        <label htmlFor='pulse' className="block mt-1 text-base font-medium leading-5 text-gray-900">
                         Pulse:
                        </label>
                        <input
                            id='pulse'
                            name='pulse'
                            type='number'
                            placeholder="pulse"
                            className="block w-[70%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2"
                        />
                        <p className='text-gray-500 text-base'> bpm </p>
                    </div>
                    <div className="flex mt-5  space-x-2">
                        <label for="transfusion-effects" className="block mt-1 text-base font-medium leading-5 text-gray-900">Undesirable Effects:</label>
                        <select id="transfusion-effects" className='block w-[80%] text-base rounded-md py-1 text-gray-900 shadow-sm border border-1 outline-none pl-2'>
                        <option value="">Select an effect</option>
                        <option value="allergic-reactions">Allergic Reactions</option>
                        <option value="trali">Transfusion-related Acute Lung Injury (TRALI)</option>
                        <option value="hemolytic-reactions">Hemolytic Transfusion Reactions</option>
                        <option value="circulatory-overload">Circulatory Overload</option>
                        <option value="infectious-complications">Infectious Complications</option>
                        <option value="hypothermia">Hypothermia</option>
                        <option value="graft-vs-host">Graft-versus-Host Disease (GVHD)</option>
                        <option value="delayed-hemolytic">Delayed Hemolytic Transfusion Reactions</option>
                        </select>
                </div>
                </div>
               
            </div>
            <TertiaryButton name="Save"/>
            </form>
        </div>
        
    </>
  )
}

export default NewDonation