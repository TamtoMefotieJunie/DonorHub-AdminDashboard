import React from 'react'

const HistoryCard = ({Group,Quantity,CollectionDate,Type,ExpDate,Component}) => {
  return (
   <>
    <div className=' w-[80%] flex items-center justify-between text-base font-semibold text-center '>
            <span className=''>{Group}</span>
            <span>{Quantity}</span>
            <span className='ml-10'>{CollectionDate}</span>
            <span>{Type}</span>
            <span className=''>{ExpDate}</span>
            <span className='text-center'>{Component}</span>    
        </div>
   </>
  )
}

export default HistoryCard