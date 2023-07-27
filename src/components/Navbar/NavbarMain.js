

import React from "react";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <div >
      <ul className="bg-slate-900 p-5 h-14 text-white flex items-center justify-end max-w-full">
        <Link to="/FormPage" className="m-5">
          <li className="p-1 border border-black rounded-lg bg-red-500 hover:bg-red-600">
            Add Data
          </li>
        </Link>
        <Link to="/Graphs" className="m-5">
          <li className="p-1 border border-black rounded-lg bg-red-500 hover:bg-red-600">
            See all Graphs
          </li>
        </Link>
      </ul>
      
    </div>
  );
};

export default NavbarMain;


