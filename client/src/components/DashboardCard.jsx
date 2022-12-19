import React from 'react';

function DashboardCard() {
  return (
    <div className="dashboard-card-container bg-blue-500 w-40 p-2 rounded-lg ">
      <div className="top  text-white my-2">
        <div className="class text-lg font-medium">CSE-B</div>
        <div className="class text-sm font-semibold">Teacher : Rajesh Sir</div>
      </div>
      <div className="bottom flex justify-center">
        <button className="btn uppercase bg-black text-white text-sm font-semibold px-2 rounded-md py-1 ">
          Open
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
