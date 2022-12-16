import React from 'react';

function HomeNavbar() {
  return (
    <div className="navbar-container flex w-full bg-red-200 p-2 items-center">
      <div className="left-container w-1/6 flex justify-center">
        <div className="logo bg-black text-white p-2  font-semibold uppercase">
          Attendo
        </div>
      </div>
      <div className="right-container w-full">
        <ul className="navbar-list flex justify-around ">
          <li className="list-item  ">Products</li>
          <li className="list-item  ">Features</li>
          <li className="list-item  ">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeNavbar;
