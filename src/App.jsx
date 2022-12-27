import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About';


import Home from './Pages/Home'
import Videodetails from './Pages/Videodetails';
// import Login from './Routes/Login'
// import Mycart from './Routes/Mycart'
// import Product from './Routes/Product'
const App = () => {
 const [navOpen, setnavOpen] = useState(false)
 let num = true;
  return (
    <div className="relative h-full p-4 ">
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/video/:id" element={<Videodetails />} />
              
              {/* <Route path="/login" element={<Login/>} />
              <Route path="/mycart" element={<Mycart/>} />
              <Route path="/:id" element={<Product/>} /> */}
              
            </Routes>
            <div className='hidden'>
            <Navbar
                navOpen = {navOpen}
                setnavOpen ={setnavOpen}
                /> 
            </div>
              
            
    </div>
  );
};

export default App;
