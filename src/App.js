import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Homepage/Home';
import About from './Components/Aboutus/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import InstructSlider from './Components/Instruction-slider/InstructSlider';
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

function App() {
  return ( 
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<><Home/><About/><Benefit/></>}/>
          <Route exact path = '/subject' element={<Home/>}/> 
          <Route exact path = '/about' element={<><Navbar/><About/></>}/>
          <Route exact path = '/benefit' element={<><Navbar/><Benefit/></>}/>
          <Route exact path = '/maths' element={<><Navbar/><Maths/></>}/>
          <Route exact path = '/physics' element={<><Navbar/><Physics/></>}/>
          <Route exact path = '/chemistry' element={<><Navbar/><Chemistry/></>}/>
          <Route exact path = '/english' element={<><Navbar/><English/></>}/>
          <Route exact path = '/hindi' element={<><Navbar/><Hindi/></>}/>
          <Route exact path = '/bio' element={<><Navbar/><Bio/></>}/>
          <Route exact path = '/account' element={<><Navbar/><Accountancy/></>}/>
          <Route exact path = '/business' element={<><Navbar/><Business/></>}/>
          <Route exact path = '/economics' element={<><Navbar/><Economics/></>}/>

        </Routes>
        <Footer/>
      </Router>     
    </div>
  );
}

export default App;
