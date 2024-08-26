import { Delete, EditAttributes, QrCode } from '@mui/icons-material'
import React from 'react'

const StockCard = ({Group,Quantity,CollectionDate,QRCode,ExpDate,Status,Modify}) => {
  return (
    <>
    <div className='p-2 border-b-gray-300 border flex items-center pr-5 justify-around text-center'>
        <div className=' w-[80%] flex items-center justify-between text-base font-semibold text-center '>
            <span className=''>{Group}</span>
            <span>{Quantity}</span>
            <span className='ml-10'>{CollectionDate}</span>
            <span>{QRCode}</span>
            <span className=''>{ExpDate}</span>
            <span className='text-center'>{Status}</span>    
        </div>
            <span className=' w-[7%] space-x-2 '>
                <EditAttributes style={{width:40,height:40,color:"#54C2B5"}}/>
                <Delete style={{width:30,height:30,color:"#CF3304"}}/>
            </span>
       
    </div>
    </>
  )
}

export default StockCard