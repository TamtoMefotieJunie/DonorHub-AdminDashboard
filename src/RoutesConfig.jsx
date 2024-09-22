import React from "react";
import Statistics from "./Components/Charts/Statistics";
import BloodCollection from "./View/BloodCollection";
import Donations from "./View/Donations";
import Hospitals from "./View/Hospitals";
import NewDonation from "./View/NewDonation";
import Notification from "./View/Notification";
import Orders from "./View/Orders";
import Settings from "./View/Settings";
import Stock from "./View/Stock";
import Technician from "./View/Technician";

const roleBasedRoutes = {
  Patient: [
    { path: "Stock", element: <Stock /> },
    { path: "Orders", element: <Orders /> },
    { path: "Technician", element: <Technician /> },
    { path: "Notification", element: <Notification /> },
    { path: "Donation", element: <Donations /> },
    { path: "Chart", element: <Statistics /> },
    { path: "Collection", element: <BloodCollection /> },
    { path: "NewDonation", element: <NewDonation /> },
    { path: "Settings", element: <Settings /> },
  ],
  Admin: [
    { path: "Technician", element: <Technician /> },
    { path: "Chart", element: <Statistics /> },
    { path: "Settings", element: <Settings /> },
    { path: "Hospital", element: <Hospitals /> },
  ],
};

export const getRoutesByRole = (userRole) => {
    return roleBasedRoutes[userRole] || [];
  };
