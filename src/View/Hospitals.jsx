import React,{useState} from 'react'
import { ChevronLeft, ChevronRight, Close, CloseRounded } from '@mui/icons-material';
import Navbar from '../Components/Bar/Navbar';
import {  HealthAndSafety } from '@mui/icons-material';
import HospitalCard from '../Components/Cards/HospitalCard';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import axios from 'axios';
import { validationSchema } from '../Utils/RegisterValidation';


const Hospitals = () => {
 
     const [modalIsOpen, setIsOpen] = useState(false);
     const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

     const closeSecondModal = () => setSecondModalIsOpen(false);
     const handleSubmit = (e) => {
      e.preventDefault();
        setIsOpen(false); 
        setSecondModalIsOpen(true); 
      };
       function openModal() {
            setIsOpen(true);
        }
        function closeModal() {
            setIsOpen(false);
        }
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 
    const stockData = [
        // { Group: "AB+", ExpDate: "10/02/2027", QRCode: "SP100", CollectionDate: "08/06/2024", Status: "Available", Quantity: "20" },
        // { Group: "B-", ExpDate: "10/03/2027", QRCode: "QD50", CollectionDate: "01/06/2023", Status: "Bought", Quantity: "15" },
        // { Group: "O+", ExpDate: "10/02/2024", QRCode: "DB9010", CollectionDate: "08/06/2024", Status: "Expired", Quantity: "02" },
        // { Group: "AB+", ExpDate: "10/02/2027", QRCode: "SPP1100", CollectionDate: "08/06/2024", Status: "Available", Quantity: "20" },
        // { Group: "A+", ExpDate: "10/02/2025", QRCode: "TBP300", CollectionDate: "08/06/2024", Status: "Available", Quantity: "10" },
           { ID:"CHUY125300", name:"CHU-Yaounde", location:"Melen" }
    ];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = stockData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const baseURL='http://localhost:8080';
    const Formik = useFormik({ 
      initialValues: {
        name: '',
        email: '',
        password: '',
        matriculationID: '',
        hospitalAddress:'',
        hospitalName:'',
        hospitalMatricule:'',
        telephone: '',
      },
      validationSchema,
      validateOnChange: false, 
      validateOnBlur: false,
     
      onSubmit: async (values) => {
        const body = {
          "hospital":{
          hospitalName: Formik.values.hospitalName,
          hospitalMatricule: Formik.values.hospitalMatricule,
          hospitalAddress: Formik.values.hospitalAddress,
          },
          "admin":{
            adminName: Formik.values.name,
            adminMatricule: Formik.values.matriculationID,
            adminEmail: Formik.values.email,
            adminPassword: Formik.values.password,
            role:"66d057cfbacb03d7456af5b4"
          }
      }

        console.log("form values:", body);
        try {
            const response = await axios.post(`${baseURL}/banks/addHospital`, body);
            console.log(response.data);
      
        } catch (error) {
            console.log(error);
        }
    }
    });
  return (
    <>   
         <Modal
    appElement={document.getElementById('root') || undefined}

                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="flex justify-center shadow-xl items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative shadow-xl w-[27%] my-6 mx-auto">
                        <div className="border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-2xl font-semibold">Hospital Info</h3>
                                <button
                                    className="bg-transparent border-0 text-black float-right"
                                    onClick={closeModal}
                                >
                                    <span className="text-black opacity-7 h-10 w-10 items-center flex justify-center text-xl block bg-[#CF3304] py-0 rounded-full">
                                        <CloseRounded style={{ color: "white" }} />
                                    </span>
                                </button>
                            </div>
                            <div className="relative p-4 flex-auto">
                                <form onSubmit={handleSubmit} className="rounded shadow-md px-8 pb-5 pt-3 w-full">
                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Hospital Name
                                    </label>
                                    <input className="shadow appearance-none text-base border rounded w-full py-2 px-1 text-black"
                                        type='text'
                                        name="hospitalName"
                                        value={Formik.values.hospitalName}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.hospitalName && <span className="text-[#CF3304] text-sm ">{Formik.errors.hospitalName}</span>}

                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Matricle
                                    </label>
                                    <input className="shadow text-base appearance-none border rounded w-full py-2 px-1 text-black"
                                        type='text'
                                        name="hospitalMatricule"
                                        value={Formik.values.hospitalMatricule}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.hospitalMatricule && <span className="text-[#CF3304] text-sm ">{Formik.errors.hospitalMatricule}</span>}

                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Location
                                    </label>
                                    <input className="shadow text-base appearance-none border rounded w-full py-2 px-1 text-black"
                                        type='text'
                                        name="hospitalAddress"
                                        value={Formik.values.hospitalAddress}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.hospitalAddress && <span className="text-[#CF3304] text-sm ">{Formik.errors.hospitalAddress}</span>}
                                
                                    <div className="flex justify-end  pt-9 pb-4 border-t border-solid border-blueGray-200 rounded-b">
                                        <button className="text-white bg-[#CF3304] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none  mb-1"
                                        type="submit">Save and continue</button>
                                    </div>
                                </form>
                              </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                appElement={document.getElementById('root') || undefined}
                isOpen={secondModalIsOpen}
                onRequestClose={closeSecondModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="flex justify-center shadow-xl items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative shadow-xl w-[27%] my-6 mx-auto">
                        <div className="border-0 rounded-lg shadow-xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-2xl font-semibold">Hospital Admin</h3>
                                <button className="bg-transparent border-0 text-black float-right" onClick={closeSecondModal}>
                                    <span className="text-black opacity-7 h-10 w-10 items-center flex justify-center text-xl block bg-[#CF3304] py-0 rounded-full">
                                        <CloseRounded style={{ color: "white" }} />
                                    </span>
                                </button>
                            </div>

                            <div className="relative p-4 flex-auto">
                                <form onSubmit={Formik.handleSubmit} className="rounded shadow-md px-8 pb-5 pt-3 w-full">
                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Full Name
                                    </label>
                                    <input className="shadow appearance-none text-base border rounded w-full py-2 px-1 text-black"
                                        type='text'
                                        name="name"
                                        value={Formik.values.name}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.name && <span className="text-[#CF3304] text-sm ">{Formik.errors.name}</span>}

                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Matricle
                                    </label>
                                    <input className="shadow text-base appearance-none border rounded w-full py-2 px-1 text-black"
                                        type='text'
                                        name="matriculationID"
                                        value={Formik.values.matriculationID}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.matriculationID && <span className="text-[#CF3304] text-sm ">{Formik.errors.matriculationID}</span>}

                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Email Address
                                    </label>
                                    <input className="shadow text-base appearance-none border rounded w-full py-2 px-1 text-black"
                                        type='email'
                                        name="email"
                                        value={Formik.values.email}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.email && <span className="text-[#CF3304] text-sm ">{Formik.errors.email}</span>}

                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Password
                                    </label>
                                    <input className="shadow text-base appearance-none border rounded w-full py-2 px-1 text-black"
                                        type='password'
                                        name="password"
                                        value={Formik.values.password}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.password && <span className="text-[#CF3304] text-sm ">{Formik.errors.password}</span>}

                                    <label className="block py-2 text-black text-sm font-bold mb-1">
                                        Telephone
                                    </label>
                                    <input className="shadow text-base appearance-none border rounded w-full py-2 px-1 text-black"
                                        type='text'
                                        name="telephone"
                                        value={Formik.values.telephone}
                                        onChange={Formik.handleChange}
                                    />
                                    {Formik.errors.telephone && <span className="text-[#CF3304] text-sm ">{Formik.errors.telephone}</span>}
                               
                            <div className="flex items-center justify-end mt-2 pt-2 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-white bg-[#CF3304] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1"
                                    type="submit">Submit</button>
                            </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        
    <div className='w-full space-y-3 h-full overflow-y-hidden'>
      <Navbar />
      
      <div className='bg-gray-100 rounded-xl p-3 h-[90%]'>
        <div className='flex items-center justify-end'>
        
         
            <button onClick= {openModal} className='flex self-end p-2 w-[10%] items-center bg-gradient-to-b from-[#CF3304] to-[#CF3304] color-white text-white justify-around rounded-lg'>
              <HealthAndSafety />
              <p className='text-md font-bold'>Add New</p>
            </button>
        </div>
        <div className='bg-white rounded-xl mt-2 h-[87%]'>
          <div className='p-2 border-b-gray-300 bg-[#54C2B5]  border flex items-center pr-5 justify-around'>
            <div className=' w-[80%] flex items-center justify-between text-base font-bold text-right'>
              <span className=' text-center '>Matricle</span>
              <span className=' text-center '>Name</span>
              <span className=' text-center '>Location</span>
            <span className='  text-center  '>Action</span>
            </div>
          </div>
          {currentItems.map((item, index) => (
            <HospitalCard
              key={index}
              ID={item.ID}
              name={item.name}
              location={item.location}
              
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
    </>
  )
}

export default Hospitals