// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <div>
        <div onClick={() => handleSectionClick('a')} className="cursor-pointer hover:bg-gray-700 p-2">
          Component A
        </div>
        {openSection === 'a' && (
          <div className="pl-4">
            <div onClick={() => navigate('/home/a/option1')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 1
            </div>
            <div onClick={() => navigate('/home/a/option2')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 2
            </div>
          </div>
        )}
        <div onClick={() => handleSectionClick('b')} className="cursor-pointer hover:bg-gray-700 p-2">
          Component B
        </div>
        {openSection === 'b' && (
          <div className="pl-4">
            <div onClick={() => navigate('/home/b/option1')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 1
            </div>
            <div onClick={() => navigate('/home/b/option2')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 2
            </div>
          </div>
        )}
        <div onClick={() => handleSectionClick('c')} className="cursor-pointer hover:bg-gray-700 p-2">
          Component C
        </div>
        {openSection === 'c' && (
          <div className="pl-4">
            <div onClick={() => navigate('/home/c/option1')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 1
            </div>
            <div onClick={() => navigate('/home/c/option2')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 2
            </div>
          </div>
        )}
        <div onClick={() => handleSectionClick('d')} className="cursor-pointer hover:bg-gray-700 p-2">
          Component D
        </div>
        {openSection === 'd' && (
          <div className="pl-4">
            <div onClick={() => navigate('/home/d/option1')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 1
            </div>
            <div onClick={() => navigate('/home/d/option2')} className="cursor-pointer hover:bg-gray-700 p-2">
              Option 2
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
