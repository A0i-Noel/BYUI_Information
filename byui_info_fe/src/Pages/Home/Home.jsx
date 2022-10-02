import React from 'react'
import BYUIimage from "../../Assets/BYUI_HeroBannar.jpeg";

import { About, What, Class } from "../../Pages"

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className="heroBannerContainer">
        <h1>Welcome to BYUI Information Center<br />For Japanese</h1>
      </div>
      <div className="mainContents">
        <About />
        <What />
        <Class />
      </div>
    </div>
  )
}

export default Home