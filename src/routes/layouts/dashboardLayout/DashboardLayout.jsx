import { Outlet } from "react-router-dom";
import "./dashboardLayout.css";

const DashboardLayout = () => {
  console.log('Rendering DashboardLayout.jsx');
  
  return (
    <div className="dashboard-layout">
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;