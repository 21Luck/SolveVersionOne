import React from 'react'
import { footerLinks } from '../constants'
import { solve } from '../assets/image'
import { Contact, Facebook, Instagram, Twitter } from 'lucide-react'
import { FaWhatsappSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
   <footer className="mt-10">
    <div className=" my-8 ml-20">
      <div className="flex flex-wrap">
        {footerLinks.map((link) => (
          <div className="w-full sm:w-1/3 md:w-1/3 p-2">
            <h4 className='text-2xl text-n-2'>{link.title}</h4>
            <ul className='mt-2'>
              {link.links.map((item) => (
                <li key={item} className='text-n-4 text-sm mt-3' >{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className=" bg-gradient-to-b from-gray-700 to-gray-800  opacity-10   py-6 rounded-xl">
      <div className="flex">
        <img src={solve} alt="" className="w-24 h-12 mx-auto" />
        <div className="flex mx-auto gap-10">
            <p className='mr-2'>Cookie</p>
            <p className="text-sm">
              CCPA:  Donot sell my personal information
            </p>
            <p className="">
              privacy
            </p>
            <p className="">
              Terms
            </p>  
        </div>
     </div>
     <div className="border-t border-n-2 p-3 mt-5">
      <div className="flex justify-between mx-auto">
        <p className="text-n-1 text-sm px-4">Copyright © 2024. All Rights Reserved</p>
        <div className="flex gap-10 mr-5">
          <Facebook/>
          <Twitter/>
          <Instagram/>
          {/* <FaWhatsappSquare/>
          <MdEmail/> */}
        </div>
      </div>
     </div>
    </div>
   </footer>
  )
}

export default Footer
