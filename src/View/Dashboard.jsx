import React from 'react'
import Sidebar from '../Components/Bar/Sidebar'

import { Outlet,Link } from 'react-router-dom'

function Dashboard(){
    return(
        <>
       <div className="bg-[#EDF1F5]/50 overflow-y-hidden flex space-x-8 w-screen h-screen p-5">
          <Sidebar/>
          <Outlet/>
       </div>
        
        </>
    )
}
export default Dashboard