import React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { me1, me2, me3, solve } from "../assets/image"
import {navLinks} from "../constants"
const Haeder = () => {
  const [toggle, setToggle] = useState(false)
 
  return (
    <nav className="top-0 z-50 sticky border-b border-b-n-4 backdrop-blur-lg bg-n-6/50  py-3 ">
      <div className="container relative mx-auto px-6">
        <div className="divbtn ">
          <div className="flex flex-shrinkk-0 items-center">
            <img src={solve} alt="Logo" className="h-12 w-24" />
          </div>
          <ul className="dcenter space-x-12 text-sm hidden sm:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={``}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="dcenter space-x-4 text-sm hidden sm:flex">
            <button className="btn2">Login</button>
            <button className="btn1">SignUp</button>
          </div>
          <div className="flex sm:hidden">
            <button 
            onClick={() => setToggle(((prev) => !prev))} 
            className="object-contain">
              {toggle ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {toggle && (
          <div className="dcenter fixed right-0 z-20 bg-gray-950 w-full p-12 flex-col sm:hidden">
            <ul className=" space-y-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={``}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className=" mt-10 space-x-12">
              <button className="btn2">Login</button>
              <button className="btn1">SignUp</button>
            </div>
          </div>
        )}
      </div> 
    </nav>
  )
}

export default Haeder
