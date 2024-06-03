// src/components/Home.js
import React from 'react';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
