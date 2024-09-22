import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./Utils/AuthProvider";

// Views
import DashboardRight from "./components/DashboardRight";
import Dashboard from "./View/Dashboard";
import AuthContainer from "./View/LoginSignUp";
import { getRoutesByRole } from "./RoutesConfig";



function App() {
  const { user, getUser } = useAuth();
  const [userState, setUserState] = useState(user);

  useEffect(() => {
    setUserState(user);
  }, [user]);

  useEffect(() => {
    const initialUser = getUser();
    setUserState(initialUser);
  }, [getUser]);

  const userRole = userState?.user?.role.name;
  const routes = getRoutesByRole(userRole);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard role={userState?.user?.role.name} />}>
          <Route index element={<DashboardRight />} />
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
        <Route path="/" element={<AuthContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
