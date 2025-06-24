import React,{useState,useEffect}  from 'react'
import Navbar from '../Components/Bar/Navbar'
import { useNavigate} from 'react-router-dom';
import { Filter, Filter1Outlined, FilterList, HealthAndSafety } from '@mui/icons-material';
import StockCard from '../Components/Cards/StockCard';
import { ChevronLeft, ChevronRight, RequestQuote } from '@mui/icons-material';
import axios from 'axios';
import Swal from 'sweetalert2'
import DonorCard from '../Components/Cards/DonorCard';

function Donor() {
    let navigate = useNavigate()
    const handleClick = () => {
    let path = `/Donation`; 
    navigate(path);
    }

    const [donors, setDonors] = useState([]);
    const [donorStats, setDonorStats] = useState({});
    const [checkedDonors, setCheckedDonors] = useState({});
     const baseURL = 'http://localhost:8080';

    useEffect(() => {
        const fetchDonors = async () => {
        try {
            const response = await axios.get(`${baseURL}/auth/getAll/Role/66d1b01a13201b49b440af16`);
            console.log(response.data);
            const donorList = response.data.data;
            setDonors(donorList);
            // fetching donor information from donor id
            donorList.forEach(async (donor) => {
                try {
                const statsResponse = await axios.post(`${baseURL}/blood/check-donor`, {
                    donorId: donor._id
                });

                setDonorStats(prev => ({
                    ...prev,
                    [donor._id]: statsResponse.data
                }));
                } catch (err) {
                console.error("Error fetching donor stats for", donor._id, err);
                }
            });
        } catch (error) {
            console.log(error);
        }
        };

        fetchDonors();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = donors.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handlesave = () => {
    Swal.fire('Saved', 'the price for your hospital has been saved','success')
    }

   

  return (
    <div className='w-full space-y-3 h-full overflow-y-hidden'>
      <Navbar />
      <p className='text-[#54C2B5] font-bold text-2xl'>Donation Safety Check</p>
     
        
        <div className='bg-white rounded-xl mt-2 h-[90%]'>
          <div className='p-2 border-b-gray-300 border flex items-center pr-5 justify-around'>
            <div className=' w-[80%] flex items-center justify-between text-base font-bold text-right'>
              <span className=' text-center  w-[10%]'>Name</span>
              <span className=' text-center  w-[10%]'>Total volume</span>
              <span className=' text-center  w-[10%]'>MSFD</span>
              <span className=' text-center  w-[10%]'>Group</span>
              <span className=' text-center  w-[10%]'>Number_Donations</span>
              <span className=' text-center  w-[10%]'>MSLD</span>
              <span className="w-[10%] text-center font-bold">Recommendation </span>
              <span className="text-center w-[10%]">Confidence</span>
      
            </div>
            <span className=' w-[10%] text-center font-semibold space-x-2'>Action</span>
          </div>
          {currentItems.map((item, index) => {
            const stats = donorStats[item._id];
         
                if (!stats) {
                    Swal.fire('Loading', 'Prediction still loading. Please wait...', 'info');
                    return;
                }

                const isSafe = stats?.isSafeToDonate;
            return (
                <>
                    <DonorCard
                    key={index}
                    Name={item.name}
                    Total_Volume={stats?.totalVolumeDonated ?? '...'}
                    MSFD={stats?.monthsSinceFirstDonation ?? '...'}
                    Group={item.bloodGroup}
                    Number_Donations={stats?.numberOfDonations ?? '...'}
                    MSLD={stats?.monthsSinceLastDonation ?? '...'}
                    recommendation={checkedDonors[item._id] ? stats?.recommendation : 'Loading...'}
                    confidence={checkedDonors[item._id]? `${stats?.predictionProbability ?? '...'}%` : '...'}

                    onCheckClick={() => {
                        setCheckedDonors(prev => ({ ...prev, [item._id]: true }));
                        Swal.fire({
                        title: isSafe ? 'Safe to Donate' : ' Not Safe to Donate',
                        html: `
                            <p><b>Name:</b> ${item.name}</p>
                            <p><b>Blood Group:</b> ${item.bloodGroup}</p>
                            <p><b>Total Volume:</b> ${stats.totalVolumeDonated} c.c.</p>
                            <p><b>Months Since First Donation:</b> ${stats.monthsSinceFirstDonation}</p>
                            <p><b>Months Since Last Donation:</b> ${stats.monthsSinceLastDonation}</p>
                            <p><b>Number of Donations:</b> ${stats.numberOfDonations}</p>
                            <p><b>Recommendation:</b> ${stats.recommendation}</p>
                                <p><b>Confidence:</b> ${stats.predictionProbability}%</p>
                        `,
                        icon: isSafe ? 'success' : 'error',
                        confirmButtonColor: isSafe ? '#54C2B5' : '#CF3304',
                        confirmButtonText: 'OK'
                        });
                    }}
                 />
                </>
            );
            })}

        
        <div className='flex justify-end mt-5 pr-5'>
          <div className='flex items-center'>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className='p-2 rounded-l-md bg-gray-200 hover:bg-gray-300 focus:outline-none'
            >
              <ChevronLeft className='h-5 w-5 text-gray-500' />
            </button>
            {Array.from({ length: Math.ceil(donors.length / itemsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
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
              disabled={currentPage === Math.ceil(donors.length / itemsPerPage)}
              className='p-2 rounded-r-md bg-gray-200 hover:bg-gray-300 focus:outline-none'
            >
              <ChevronRight className='h-5 w-5 text-gray-500' />
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Donor