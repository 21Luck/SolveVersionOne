import {  Haeder,Button,Footer,Testimonials,Hero } from "./components/components"
import Services from "./components/Services"
import Workflow from "./components/Workflow"
import Pricing from "./components/Pricing"
const App = () => {
  return (
   <>
   <Haeder/>
   <div className="max-w-7xl px-10   mt-10 mx-auto">
   <Hero/>
   <Services/>
   <Workflow/>
   <Pricing/>
   <Testimonials/>
   <Button/>
   
   </div>
   <Footer/>
   </>
  )
}

export default App
