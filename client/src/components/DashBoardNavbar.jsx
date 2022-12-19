import React from 'react';
import { Link } from 'react-router-dom';

function DashBoardNavbar() {
  return (
    <div className="navbar-container flex w-full p-2 items-center ">
      <div className="left-container w-1/3 flex justify-start">
        <div className="logo bg-black text-white text-3xl px-2  font-semibold uppercase cursor-pointer">
          <Link to="/">A</Link>
        </div>
      </div>
      <div className="right-container w-full">
        <ul className="navbar-list flex justify-around items-center">
          <li className="list-item bg-slate-200 p-2 text-xl font-sans font-semibold cursor-pointer">
            Dashboard
          </li>
          <li className="list-item bg-slate-200 p-2 text-md font-sans font-medium cursor-pointer">
            John Smith
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashBoardNavbar;
