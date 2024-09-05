import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './View/Dashboard';
import DashboardRight from './components/DashboardRight';
import Stock from './View/Stock';
import Orders from './View/Orders';
import Technician from './View/Technician';
import Settings from './View/Settings';
import Notification from './View/Notification';
import Statistics from './Components/Charts/Statistics';
import AuthContainer from './View/LoginSignUp';
import Donations from './View/Donations';
import BloodCollection from './View/BloodCollection';
import NewDonation from './View/NewDonation';
import Hospitals from './View/Hospitals';
import { Provider } from 'react-redux';
import { useAuth } from './Utils/AuthProvider';

function App() {
  const { user, getUser } = useAuth();
  const [userState, setUserState] = useState("");

  useEffect(() => {
    console.log("The user has changed in App.jsx");
    console.log(user);

    setUserState(user);
  }, [user]);

  useEffect(() => {
    let u = getUser();

    setUserState(u);

    console.log(`Setting userState to`)
    console.log(u);
  }, []);

  useEffect(() => {
    console.log("In App.jsx, userState is")
    console.log(userState);
  }, [userState]);

  const roleBasedRoutes = {
    Patient: [
      { path: 'Stock', element: <Stock />, exact: false },
      { path: 'Orders', element: <Orders/>, exact: true },
      { path: 'Technician', element: <Technician />, exact: true },
      { path: 'Notification', element: <Notification/>, exact: true },
      { path: 'Donation', element: <Donations/>, exact: true },
      { path: 'Chart', element: <Statistics/>, exact: true },
      { path: 'Collection', element: <BloodCollection/>, exact: true },
      { path: 'NewDonation', element: <NewDonation/>, exact: true },
      { path: 'Settings', element: <Settings />, exact: true },
    ],
    systemAdmin: [
      { path: 'Technician', element: <Technician />, exact: true },
      { path: 'Chart', element: <Statistics/>, exact: true },
      { path: 'Settings', element: <Settings />, exact: true },
      { path: 'Hospital', element: <Hospitals/>, exact: true },
      
    ],
  };

  function renderRoutes(){
    let role = userState?.user?.role.name;
    // switch(role){
    //   case "Patient":
    //     return protectedRoutes.map(({element, path, exact}, index) => <Route key={index} element={element} path={path} exact={exact} />)
    //   default:
    //     return <></>
    // }
    const routes = roleBasedRoutes[role] || [];

    return routes.map(({ element, path, exact }, index) => (
      <Route key={index} element={element} path={path} exact={exact} />
    ));
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
             <Route path="/dashboard" element={<Dashboard role={userState?.user?.role.name} />}>
             <Route index element={<DashboardRight />} /> {/* Default content */}
             {renderRoutes()} {/* Role-based content */}
            </Route>
          }

          <Route path="/" element={<AuthContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
