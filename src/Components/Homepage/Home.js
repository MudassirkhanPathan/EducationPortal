import React ,{useState} from 'react'
import '../Homepage/Home.css'
import { Link } from 'react-router-dom'


export default function Home() {
  
  return (
    <div>
      <header className='homeNav'>
        <h2><a href="#">DIGITAL E-LEARNING</a></h2>
       
        <ul className="nav">
           <li><Link to="/">Home</Link></li>
          <li><Link to="/subject" >Subject</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/benefit">Benefits</Link></li>
        </ul>
    </header>
    <section className="box">
    <video autoPlay loop muted>
          <source src="/images/bgVideo.mp4" type="video/mp4" />
        </video>
        <div className="boxBlur">
        <h1> Class 12th SYLLABUS </h1>
        <h3>The true value of e-learning lies in its ability to tailor education to fit the learner, not the other way around. </h3>
         </div>
    </section>
    {/* <!-- =========== Main vedio box END =============== --> */}

     {/* <!-- ========= Subject Cards Start ============== --> */}
    <div className="container">
        <div className="card">
          <h2>MATHEMATICS</h2>
          <img src="./images/maths.png" className="iconMaths"/>
          <div className="button-group">
            <Link to="/maths"><button>MATHS</button></Link>
            <Link to="/physics"><button>PHYSICS</button></Link>
            <Link to="/chemistry"><button>CHEMISTRY</button></Link>
            <Link to="/english"><button>ENGLISH</button></Link>
            <Link to="/hindi"><button>HINDI</button></Link>

          </div>
          
        </div>
    
        <div className="card">
          <h2>BIOLOGY</h2>
          <img src="./images/bio.png" className="icon"/>
          <div className="button-group">
          <Link to="/bio"><button>BIOLOGY</button></Link>
            <Link to="/physics"><button>PHYSICS</button></Link>
            <Link to="/chemistry"><button>CHEMISTRY</button></Link>
            <Link to="/english"><button>ENGLISH</button></Link>
            <Link to="/hindi"><button>HINDI</button></Link>

          </div>
                  </div>
    
        <div className="card">
          <h2>COMMERCE</h2>
          <img src="./images/commerce.png" className="icon"/>
          <div className="button-group">
          <Link to="/account"><button>ACCOUNTANCY</button></Link>
            <Link to="/business"><button>BUSINESS STUDIES</button></Link>
            <Link to="/economics"><button>ECONOMICS</button></Link>
            <Link to="/english"><button>ENGLISH</button></Link>
            <Link to="/hindi"><button>HINDI</button></Link>
          </div>
          
        </div>
    </div>
    </div>
  )
}





