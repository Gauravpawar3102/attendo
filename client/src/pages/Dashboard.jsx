import React from 'react';
import DashBoardNavbar from '../components/DashBoardNavbar';
import DashboardCard from '../components/DashboardCard';

function Dashboard() {
  return (
    <div className="top-container flex flex-col items-center justify-center ">
      <DashBoardNavbar />
      <div className="container w-4/5 flex flex-wrap gap-6 mt-5">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;
