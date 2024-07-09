import React from 'react'
import { features} from '../constants'
import { BatteryCharging, Code2, CodeSquare, Fingerprint, PlugZap } from 'lucide-react'
import { glob } from '../assets/image'
const Services = () => {
  return (
    <div className='relative  border-b border-n-6 mt-5'>
      <div className="text-center">
        <span className="rounded-lg text-yellow-700 text-xl font-medium px-4   ">
          Services
        </span>
        <h2 className="h2">
           <span className="mr-2">Exclusive</span>
          <span className="textg mr-2">Services</span>
           on your Finger Tips!
        </h2>
      </div>
      <div className="flex flex-wrap mt-2">
        {features.map((feature) => (
        <div className="flex sm:w-1/2 md:w-1/3 " key={feature.id}>
          <div className="flex gap-5">
            <div className=" bg-yellow-700 rounded-full w-30  mt-4 h-6">
              <Code2/>
            </div>
            <div className=" mt-5">
              <h2>{feature.text}</h2>
              <p className="text-n-3 text-sm mt-2 mb-5">
                { feature.description }
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Services
