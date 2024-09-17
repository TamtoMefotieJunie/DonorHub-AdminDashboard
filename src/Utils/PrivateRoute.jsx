
import { Dashboard as DashboardIcon,Inventory,Equalizer,Biotech, Settings as SettingsIcon, WalletOutlined, AdminPanelSettings, VolunteerActivism, Person } from '@mui/icons-material';

export const userLinks = [
    {
        key:"Patient",
        links:[ 
            { path: "dashboard", label: "Dashboard", icon: <DashboardIcon/>, exact: true },
            { path: "Stock",label: "Inventory", icon: <Inventory />, exact: false },
            { path: "Orders", label: "Requests", icon: <WalletOutlined />, exact: false },
            { path: "Technician",label: "Lab Technicians", icon: <Biotech />, exact: false },
            { path: "Donor", label: "Donors", icon: <VolunteerActivism />, exact: false },
        ]
    },
    {
        key:"Admin",
        links:[ 
            { path: "dashboard", label: "Dashboard", icon: <DashboardIcon/>, exact: true },
            { path: "Hospital",label: "Hospital", icon: <AdminPanelSettings />, exact: false },
            { path: "Patient", label: "Patients", icon: <Person />, exact: false },
            { path: "Donor", label: "Donors", icon: <VolunteerActivism />, exact: false },
            { path: "Technician",  label: "Lab Technicians", icon: <Biotech />, exact: false },
         
        ] 
    }

]