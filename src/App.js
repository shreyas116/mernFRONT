//import NavbarMain from './components/Navbar/NavbarMain';
import HomePage from './pages/HomePage';

import DoughnutChart from './components/DoughnutChart';

import Graphs from './components/Graphs';
import FormPage from './pages/FormPage';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import BarChart from './components/BarChart';

function App() {
  return (
    <div >
    
      <Routes >
      <Route path="/" element={<HomePage />} />
        <Route path="/BarChart" element={<BarChart />} />
        <Route path="/DoughnutChart" element={<DoughnutChart/>}></Route>
        
        
        <Route path="/Graphs" element={<Graphs/>}></Route>
        <Route path="/FormPage" element={<FormPage/>}></Route>
        
        
        
        
      </Routes>
    </div>
  );
}

export default App;
