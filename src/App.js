import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Components/Homepage/Home';
import About from './Components/Aboutus/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Maths from './Components/Mathematics/Maths';
import Benefit from './Components/Benefit-Slider/Benefit';
import Bio from './Components/Biology/Bio';
import Chemistry from './Components/Chemistry/Chemistry';
import Physics from './Components/Physics/Physics';
import English from './Components/English/English';
import Hindi from './Components/Hindi/Hindi';
import Accountancy from './Components/Accountancy/Accountancy';
import Business from './Components/Business-Studies/Business';
import Economics from './Components/Economics/Economics';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppRoutes() {
  const location = useLocation();
  const hideFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Main App Routes */}
        <Route exact path='/home' element={<><Home/><About/><Benefit/></>}/>
        <Route path='/subject' element={<Home />} />
        <Route path='/about' element={<><Navbar /><About /></>} />
        <Route path='/benefit' element={<><Navbar /><Benefit /></>} />
        <Route path='/maths' element={<><Navbar /><Maths /></>} />
        <Route path='/physics' element={<><Navbar /><Physics /></>} />
        <Route path='/chemistry' element={<><Navbar /><Chemistry /></>} />
        <Route path='/english' element={<><Navbar /><English /></>} />
        <Route path='/hindi' element={<><Navbar /><Hindi /></>} />
        <Route path='/bio' element={<><Navbar /><Bio /></>} />
        <Route path='/account' element={<><Navbar /><Accountancy /></>} />
        <Route path='/business' element={<><Navbar /><Business /></>} />
        <Route path='/economics' element={<><Navbar /><Economics /></>} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
