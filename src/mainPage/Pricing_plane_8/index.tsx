import { Wrapper_prising } from './pricing';
import box_first_image from '../../assets/box_first.svg';
import right from '../../assets/right_a.svg';
import box_second_image from '../../assets/second_box_image.svg';

const Pricing_planeComponent = () => {
  return (
    <Wrapper_prising>
         <div className='Pricing_plane_wrapper'>
       <div className='top_text_sstyle'>
         <p className='Pricing_style'>Pricing Plane</p>
           <div className='Montly_yearly_contaniner'>
            <p className='Montly_style'>Monthly</p>
            <p className='Yearly_style'>Yearly</p>
           </div>
       </div>

       <div className='line_second'></div>

       <div className='cost_boxes_wrapper'>

         <div className='main_firts_box_wrapper'>
           <div className='first_box_style'>
              <div className='box_inside_left'>
                 <p className='basic_plan'>Basic Plan</p>
                 <div className='number_two_wrapper'>
                 <p className='ninteen'>$19</p>
                 <p className='mo'>/mo</p>
                 </div>
                 <img className='box_first_image' src={box_first_image} alt='image'/>
                 
              </div>
              <div className='box_inside_center'>

               </div>
               <div className='box_inside_right'>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Mistakes To Avoid</p>
                  </div>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Your Startup</p>
                  </div>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Knew About Fonts</p>
                  </div>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Winning Metric for Your Startup</p>
                  </div>

                  <button className='choose_button'>CHOSE A OPTION
                  </button>
               </div>
               
           </div>
         </div>




           <div className='second_box_style'>
           <div className='box_inside_left'>
                 <p className='basic_plan'>Hard Plan</p>
                 <div className='number_two_wrapper'>
                 <p className='ninteen'>$29</p>
                 <p className='mo'>/mo</p>
                 </div>
                 <img className='box_first_image' src={box_second_image} alt='image'/>
                 
              </div>
              <div className='box_inside_center'>

               </div>

               <div className='box_inside_right'>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Mistakes To Avoid</p>
                  </div>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Your Startup</p>
                  </div>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Knew About Fonts</p>
                  </div>
                  <div className='Test_in_wrapper'>
                     <img className='right_style' src={right} alt='right'/>
                     <p className='testS_style'>Winning Metric for Your Startup</p>
                  </div>

                  <button className='choose_button'>CHOSE A OPTION
                  </button>
               </div>
           </div>
       </div>
   </div>

    </Wrapper_prising>
  )
}

export default Pricing_planeComponent;