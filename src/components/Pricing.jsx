import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircleIcon } from 'lucide-react'

const Pricing = () => {
  return (
    <div>
      <h2 className="h2 text-center">
        Pricing
      </h2>
      <div className="flex flex-wrap mt-5 ">
        {pricingOptions.map((option) => (
          <div className="w-full sm:w-1/2 md:w-1/3 mt-4 p-2 ">
            <div className="rounded-xl border border-n-6 p-10">
              <h4 className="text-3xl ">
                {option.title}
                {/* Read more about how to right such a condition */}
                
                {option.title === 'pro' && ( 
                  <span className='textg'>Most popular</span>
                )}
              </h4>
              <p className="mt-6">
                <span className="text-4xl ">{option.price}</span>
                <span className="text-n-3">/month</span>
              </p>
              <ul className="">
                {option.features.map((feature,index) => (
                  <div className="flex mt-5">
                    <div className="bg-yellow-700 w-6 h-6 rounded-full items-center justify-center ">
                      <CheckCircleIcon/>
                    </div>
                  <div className="text-n-3 ml-5">
                    <p key={index}>{feature}</p>
                  </div>
                  </div>
                ))}
              </ul>
              <div className="rounded-xl border border-yellow-700 p-2 mt-8">
                <p className="text-n-4">Subscribe</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
