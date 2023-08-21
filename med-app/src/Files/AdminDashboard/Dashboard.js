import React from "react";

import { FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex flex-column md:w-5/6 w-full bg-l-orange h-screen">
      {/* <Sidebar selectedMenu="0" /> */}
      <section className="flex flex-col w-screen">
        <div className="flex flex-col h-full gap-3 p-4">
          <div className="flex justify-between h-10 gap-10  pl-10">
            <input
              className="flex-grow bg-d-grey rounded-md w-3/5 px-3 text-white p-1"
              type="text"
              placeholder="Search Employee"
            />

            <div className="flex flex-grow flex-column bg-d-grey rounded-md w-1/6 text-white place-content-between">
              <h2 className="p-2 overflow-hidden">Admin</h2>
              <button>
                <i className="fa-solid fa-bell fa-shake text-xl rounded-full mr-2 h-3/5 w-8"></i>
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:h-2/6 h-5/6 gap-5 p-6">
            <div className="flex-grow justify-items-center bg-d-orange rounded-md">
              <h1 className="p-2 font-bold">Total sales</h1>
            </div>
            <div className="flex-grow bg-d-orange rounded-md">
              <h1 className="p-2 font-bold">Total Orders</h1>
            </div>
            <div className="flex-grow bg-d-orange rounded-md">
              <h1 className="p-2 font-bold">Total Revenue</h1>
            </div>
          </div>
          <div className="flex justify-between h-1/2 p-6">
            <div className="flex-grow bg-d-orange rounded-md">Chart</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
