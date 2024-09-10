import React from 'react'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'

export default function Footer() {
  return (
    <div>
        <div className="footer">
        <div className="text">
            <h3>Address</h3>
            <p>H-83,Ravindra Nagar<br/> 
            near Prakash Smriti <br/>
            khargone Madhya Pradesh,451001 <br/>
            +91-745824125</p>
             </div>

        <div className="text">
            <h3>Quick Links</h3>
            <Link to="/"><p>Home</p></Link>
            <Link to="/subject"><p>Subjects</p></Link>
            <Link to="/about"><p>About Us</p></Link>
            <Link to="/benefit"><p>Benefits</p></Link>
        </div>

        <div className="text">
            <h3>Subject</h3>
            <Link to="/subject"><p>Biology</p></Link>
            <Link to="/subject"><p>Maths</p></Link>
            <Link to="/subject"><p>Commerce</p></Link>
            </div>

        <div className="Social-Links">
            <h3>Connect Us</h3>
            <p><a href=""><i className="fa-brands fa-youtube"></i></a></p>
            <p><a href=""><i className="fa-brands fa-facebook"></i></a></p>
            <p><a href=""><i className="fa-brands fa-instagram"></i></a></p>
            <p><a href=""><i className="fa-brands fa-twitter"></i></a></p>
            
        </div>
        </div>
    </div>
  )
}

