import React from "react";

import { Link } from "react-router-dom";

const NavbarGraph = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <ul className="flex h-14  text-white justify-between bg-slate-900 px-5 py-1">
        <Link to="/BarChart"  className="m-auto border border-black rounded-lg p-1 bg-red-500 hover:bg-red-600">
          <li >
            Bar
          </li>
        </Link>

       <Link to="/DoughnutChart"  className="m-auto border border-black rounded-lg p-1 bg-red-500 hover:bg-red-600">
       <li>
          Doughnut
        </li>
       </Link>
      
      </ul>
      <div
        className="flex-grow bg-cover bg-center"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcHVsYXRpb24lMjBncmFwaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")',
        }}
      ></div>
    </div>
  );
};

export default NavbarGraph;
