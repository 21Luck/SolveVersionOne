import React from 'react'
import {code} from '../assets/image'
import { CheckCircle2 } from 'lucide-react'
import { itemsList } from '../constants'
const Workflow = () => {
  return (
    <div className='mt-10'>
        <h2 className="h2 text-center">
             Software 
            <span className="textg">Development</span>
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className=" p-2 w-full md:w-1/2">
            <img src={code} alt=""  className=''/>
          </div>
          <div className=" pt-10 w-full md:w-1/2 md:mt-10">
            {itemsList.map((item) => (
              <div className="flex mt-5" key={item.id}>
                <div className="flex items-center justify-center h-6 w-30 rounded-full bg-yellow-700 mr-5">
                  <CheckCircle2 />
                </div>
                <div className=" ">
                  <h5 className="text-n-2 text-lg">
                    {item.title}
                  </h5>
                  <p className=" text-n-4 text-sm  sm:msx-w-[420px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  )
}

export default Workflow
