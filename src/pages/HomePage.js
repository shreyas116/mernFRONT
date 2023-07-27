import React from "react";
import NavbarMain from "../components/Navbar/NavbarMain";


const HomePage = () => {
  
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavbarMain />
      
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

export default HomePage;
