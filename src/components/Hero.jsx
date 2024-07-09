import React from 'react'
import { ReactTyped } from "react-typed";
import video1 from "../assets/video1.mp4"
const Hero = () => {
  return (
    <div className=' dcenter mt flex-col md:mt-'>
      <h1 className="h1">
        Exptional & Sustainable 
        <br  />
        <span className="textg mr-2">
          <ReactTyped
            strings={[
              "Success",
              "Growth",
              "Profit",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          </span>
        for Businesses.
      </h1>
      <p className="text">
        Partner with us to see Measurable Growth and significant return on investment 
      </p>
      <div className="dcenter my-10">
        <a href="" className="btn2">
          Get Started
        </a>
      </div>
      <div className="dcenter">
        <video src={video1}  autoPlay loop muted className='w-full rounded-lg border-2 border-yellow-700 shadow-yellow-600'>
          Your Browser does not support the video tag
        </video>
      </div>
    </div>
  )
}

export default Hero
