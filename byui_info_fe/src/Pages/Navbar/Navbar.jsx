import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className="logo">
        <h1>Brigham Young University Idaho (BYUI)<br />留学前に知っておきたい情報局</h1>
      </div>
      <div className="navBtn">
        <ul>
          <li>
            <Link to="/Home" >Home</Link>
          </li>
          <li>
            <Link to="/Contact" >Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar