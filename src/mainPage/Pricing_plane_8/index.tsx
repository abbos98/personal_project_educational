import { Wrapper_prising } from './pricing';
import { useState } from 'react';
import Hmenu from './pricingMenu/Hmenu';
import Vmenu from './pricingMenu/Vmenu';

const UseStateComponent = () => {
   const [active, setActive] = useState(false)
   
   function handleClick () {
      setActive (false);
   }
   function handleOther() {
      setActive (true)
   }
  return (
    <Wrapper_prising>
         <div className='Pricing_plane_wrapper'>
       <div className='top_text_sstyle'>
         <p className='Pricing_style'>Pricing Plane</p>
           <div className='Montly_yearly_contaniner'>
            <p onClick={handleClick} className='Montly_style'>Monthly</p>
            <p onClick={handleOther} className='Yearly_style'>Yearly</p>
           </div>
       </div>

       <div className='line_second'></div>

       <div className='cost_boxes_wrapper'>
         {active ? <Hmenu /> : <Vmenu />}
       
       </div>
   </div>

    </Wrapper_prising>
  )
}

export default UseStateComponent;