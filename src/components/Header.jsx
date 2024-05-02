import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";

const Header = ({}) => {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);
  const navigate = useNavigate();

  const toggleBreadcrumb = () => {
    setShowBreadcrumb(!showBreadcrumb);
  };

  return (
    <nav className="bg-rose-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-semibold">FoodFellow</h1>
        </div>
        <div className="md:flex items-center">
          <button href="#" className="text-white mx-4 hover:text-gray-200" onClick = {() => {
            localStorage.removeItem('token');
            navigate('/signin');
          }}>Logout</button>
          {/* <a href="#" className="text-white mx-4 hover:text-gray-200">About</a>
          <a href="#" className="text-white mx-4 hover:text-gray-200">Contact</a> */}
        </div>
        {/* <div className="md:hidden">
          <HiMenu className="text-white cursor-pointer" onClick={toggleBreadcrumb} size={24} />
        </div> */}
      </div>
      {/* {showBreadcrumb && (
        <div className="container mx-auto py-2">
          <ul className="flex items-center text-white text-sm">
            <li className="mr-2">Home</li>
            <li className="mr-2">About</li>
            <li>Contact</li>
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Header;

