import React from 'react'
import { clients,Testimonial } from '../constants'
import { me1 } from '../assets/image'

const Testimonials = () => {
  return (
    <div>
      <h1 className="h2 text-n-2  text-center mt-10">
        some of our 
        <span className="textg ml-2 mr-2">satisfied</span>
         clients
      </h1>
      <div className="flex flex-wrap">
        {clients.map((client,index) => (
          <div className="dcenter flex-wrap sm:w-1/2 md:w-1/3 mt-4">
            <img src={client} alt="images" key={index} className = {`${index === 2 ? 'w-full h-16' : 'w-24 h-16 rounded-lg'} my-2`} />
          </div>
        ))}
      </div>
      <div className="">
      <h2 className="h1 mt-10 text-center text-yellow-700">
        What Our clients Say
      </h2>
      <div className="flex flex-wrap mt-5  border-b border-b-n-6">
        {Testimonial.map((test, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-2 ">
            <div className="bg-n-8 rounded-xl border border-n-6 p-5 mt-4">
              <p className="text-n-4  text-sm">{test.text}</p>
              <div className="flex   mt-5 ">
                <img src={test.img} alt="clients" className='w-12 h-12 rounded-full' />
                <div className="">
                <p className="textg  text-xl ml-10">{test.name}</p>
                <p className="text-n-5 ml-10">{test.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Testimonials
