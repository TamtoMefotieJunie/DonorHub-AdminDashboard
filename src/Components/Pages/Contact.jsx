import React from 'react'
import ContactInput from '../Inputs/ContactInput'
import { Phone, Work,LocationCity } from '@mui/icons-material'
import Button from '../Button/Button'
import TertiaryButton from '../Button/TertiaryButton'

const Contact = () => {
  return (
   <form  action="#" method="POST" className="space-y-3 w-[100%] p-5 h-[93%] ">
       <div>
            <h3 className='flex space-x-5 ml-5 font-semibold'>
                <Phone/>
                <p>Based on Contact</p>
            </h3>
             <ContactInput label="Email" name='email' type='email' id='email'/>
            <ContactInput label="Telephone" name='tel' type='tel' id='tel'/>
            <ContactInput label="Address" name='address' type='text' id='address'/>
       </div>
       <div>
            <h3 className='flex space-x-5 ml-5 font-semibold'>
                 <Work/>
                <p>Based on Occupation</p>
            </h3>
            <ContactInput label="Occupation" name='occupation' type='text' id='occupation'/>
            <ContactInput label="Service Location" name='location' type='text' id='location'/>
            
        </div>
        <div>
             <h3 className='flex space-x-5 ml-5 font-semibold'>
                <LocationCity/>
                <p>Based on Location</p>
            </h3>
            <ContactInput label="City" name='city' type='text' id='city'/>
            <ContactInput label="Nationality" name='nationality' type='text' id='Nationality'/>
        </div>
        <TertiaryButton name="Save"/>
   </form>
  )
}

export default Contact