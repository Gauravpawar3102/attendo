import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div className="banner-container bg-blue-300 h-80 w-1/2 ">
      <div className="top-container h-1/2 flex  justify-center items-end w-full  ">
        <div className="text text-xl spacing  h-1/3 tracking-wider">
          Manage Your attendance with
          <span className="text-3xl font-semibold"> Attendo </span> for Free
        </div>
      </div>
      <div className="bottom-container flex justify-center ">
        <Link className="cta bg-black py-1 px-2 text-white " to="/register">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="hompage-container flex flex-col items-center gap-3 ">
      <HomeNavbar />

      <Banner />
    </div>
  );
}

export default HomePage;
