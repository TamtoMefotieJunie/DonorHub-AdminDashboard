import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Navbar from '../Components/Bar/Navbar';
import { Filter, Filter1Outlined, FilterList, HealthAndSafety } from '@mui/icons-material';
import StockCard from '../Components/Cards/StockCard';
import { useNavigate } from "react-router-dom";

const Stock = () => {

let navigate = useNavigate();
const handleClick = () => {
  let path = `/Donation`; 
    navigate(path);
}

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  const stockData = [
    { Group: "AB+", ExpDate: "10/02/2027", QRCode: "SP100", CollectionDate: "08/06/2024", Status: "Available", Quantity: "20" },
    { Group: "B-", ExpDate: "10/03/2027", QRCode: "QD50", CollectionDate: "01/06/2023", Status: "Bought", Quantity: "15" },
    { Group: "O+", ExpDate: "10/02/2024", QRCode: "DB9010", CollectionDate: "08/06/2024", Status: "Expired", Quantity: "02" },
    { Group: "AB+", ExpDate: "10/02/2027", QRCode: "SPP1100", CollectionDate: "08/06/2024", Status: "Available", Quantity: "20" },
    { Group: "A+", ExpDate: "10/02/2025", QRCode: "TBP300", CollectionDate: "08/06/2024", Status: "Available", Quantity: "10" },

  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = stockData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='w-full space-y-3 h-full overflow-y-hidden'>
      <Navbar />
      <p className='text-[#54C2B5] font-bold text-2xl'>Our Stock</p>
      <div className='bg-gray-200 rounded-xl p-3 h-[80%]'>
        <div className='flex p-1 items-center justify-between'>
          <p className='font-bold text-gray-500 text-xl'>Blood Packs</p>
          <div className='flex items-center w-[25%] justify-around'>
            <button onClick= {handleClick} className='flex p-2 w-[65%] items-center bg-gradient-to-b from-[#CF3304] to-[#CF3304]/70 color-white text-white justify-around rounded-lg'>
              <HealthAndSafety />
              <p className='text-md font-bold'>Add Blood Product</p>
            </button>
            <div className='flex p-2 text-white items-center bg-gradient-to-r from-[#54C2B5] to-[#333]/10 justify-around w-[29%] rounded-lg'>
              <FilterList />
              <p className='font-bold text-md'>Filter</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-xl mt-2 h-[90%]'>
          <div className='p-2 border-b-gray-300 border flex items-center pr-5 justify-around'>
            <div className=' w-[80%] flex items-center justify-between text-base font-bold text-right'>
              <span className=' text-center  w-[12%]'>Group</span>
              <span className=' text-center  w-[12%]'>Quantity</span>
              <span className=' text-center  w-[12%]'>Collection date</span>
              <span className=' text-center  w-[12%]'>QR code</span>
              <span className=' text-center  w-[12%]'>Expiration date</span>
              <span className=' text-center  w-[12%]'>Status</span>
            </div>
            <span className=' w-[10%] text-center font-semibold space-x-2'>Action</span>
          </div>
          {currentItems.map((item, index) => (
            <StockCard
              key={index}
              Group={item.Group}
              ExpDate={item.ExpDate}
              QRCode={item.QRCode}
              CollectionDate={item.CollectionDate}
              Status={item.Status}
              Quantity={item.Quantity}
            />
          ))}
        
        <div className='flex justify-end mt-5 pr-5'>
          <div className='flex items-center'>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className='p-2 rounded-l-md bg-gray-200 hover:bg-gray-300 focus:outline-none'
            >
              <ChevronLeft className='h-5 w-5 text-gray-500' />
            </button>
            {Array.from({ length: Math.ceil(stockData.length / itemsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={`p-2 bg-gray-200 hover:bg-gray-300 h-11 focus:outline-none ${currentPage === pageNumber ? 'bg-[#CF3300]' : ''}`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(stockData.length / itemsPerPage)}
              className='p-2 rounded-r-md bg-gray-200 hover:bg-gray-300 focus:outline-none'
            >
              <ChevronRight className='h-5 w-5 text-gray-500' />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Stock;