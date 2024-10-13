import { Wrapper_Enhance } from './Enhance';
import box_image_one from '../../assets/foto_box.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import box_image_two from '../../assets/image_box.jpg';
import box_image_three from '../../assets/third_box_image.jpg';
import box_image_four from '../../assets/Pelajari-Jenis-Meeting-Berdasarkan-Tujuannya.jpg';

const Enhance_component = () => {
  return (
    <Wrapper_Enhance>
     <div className='main_main'>

        <div className='main_text_wrapper'>
          <p className='main_text_style'>Enhance Your Online Presence </p>
        </div>

         
         <div className='boxes_wrapper'>
            <div className='box_style'>
               <div className='first_line'>
                 <p className='grow_style'>Grow Your Business Digitally</p>
                 <p className='social_style'>Social Pulse</p>
               </div>
               <div className='second_line'>
                 <p className='digital_mar'>Digital Marketing involves promoting products or services using online platforms</p>
               </div>
               <div className='third_line'>
                 <img className='box_image_style' src={box_image_one} alt='image'/>
               </div>
               <div className='fourth_line'>
                 <button className='button_style'>Read More</button>
                 <ArrowForwardIcon className='arrow_style'/>
               </div>
            </div>
            <div className='box_style'>
               <div className='first_line'>
                 <p className='grow_style'>Connect Digitally Customers</p>
                 <p className='social_style'>Search Stream</p>
               </div>
               <div className='second_line'>
                 <p className='digital_mar'>Digital Marketing involves promoting products or services using online platforms</p>
               </div>
               <div className='third_line'>
                 <img className='box_image_style' src={box_image_two} alt='image'/>
               </div>
               <div className='fourth_line'>
                 <button className='button_style'>Read More</button>
                 <ArrowForwardIcon className='arrow_style'/>
               </div>
            </div>
            <div className='box_style'>
               <div className='first_line'>
                 <p className='grow_style'>Dominate Online Marketing</p>
                 <p className='social_style'>Brand Blast</p>
               </div>
               <div className='second_line'>
                 <p className='digital_mar'>Digital Marketing involves promoting products or services using online platforms</p>
               </div>
               <div className='third_line'>
                 <img className='box_image_style' src={box_image_three} alt='image'/>
               </div>
               <div className='fourth_line'>
                 <button className='button_style'>Read More</button>
                 <ArrowForwardIcon className='arrow_style'/>
               </div>
            </div>
            <div className='box_style'>
               <div className='first_line'>
                 <p className='grow_style'>Transform Your Online Strategy</p>
                 <p className='social_style'>Digital Boost</p>
               </div>
               <div className='second_line'>
                 <p className='digital_mar'>Digital Marketing involves promoting products or services using online platforms</p>
               </div>
               <div className='third_line'>
                 <img className='box_image_style' src={box_image_four} alt='image'/>
               </div>
               <div className='fourth_line'>
                 <button className='button_style'>Read More</button>
                 <ArrowForwardIcon className='arrow_style'/>
               </div>
            </div>
         </div>
     </div>
    </Wrapper_Enhance>
  )
}

export default Enhance_component;