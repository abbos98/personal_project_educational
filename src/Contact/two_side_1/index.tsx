import { Wrapper_two_side } from './twoSideStyle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import map from "../../assets/map_image.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Work_witch_us_Component from '../../AboutUs/work_with_us';

const Two_side_Contact = () => {
  return (
    <Wrapper_two_side>
        <div className='all_main_Wrapper'>

          <div className='left_side_wrapper'>
            <div className='top_side'>
              <p className='get_in_style'>Get In Touch</p>
              <p className='long_text_style'>Connect Digitally Grow The Exponentially</p>
              <p className='smaller_text_style'>A digital agency is a company that provides creative, strategic, and technical development of screen-based </p>
            </div>
               

            <div className='Get_an_appointment_wrapper'>
                <div className='get_an_style'>Get An Appointment</div>
                <div className="name_email_wrapper">
                   <input className='your_name' type="text" placeholder='Your Name' />   
                   <input className='your_name' type="text" placeholder='Your Email' />   
                </div>
                <div className='number_option_wrapper'>
                  <input className='Your_number' type="text" placeholder='Your Number' />   
                  <input list='test' className='Your_option' type="text" placeholder='Choose a Option' />  
                  <datalist id='test'>
                   <option value="option-1"/>
                   <option value="option-2"/>
                   <option value="option-3"/>
                   <option value="option-4"/>
                   <option value="option-5"/>
                  </datalist> 
                </div>
                <div className='text_area_Wrapper'>
                   <input className='text_area_Style' type="text" placeholder='Message here..' />
                </div>
                <div className='right_side'>
                  <button className='but_style'>Send Now</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div>
            </div>

            


          </div>

          <div className='right_side_wrapper'>
             <div className='image_wrapper'>
                 <img className='image_style_map' src={map} alt='image'/>
             </div>
             <div className='detail_address_wrapper'>
                <div className='message_wrapper'>
                   <div className='icon_left_side'>
                     <EmailIcon className='icon_style_in'/>
                   </div>
                   <div className='text_detail_right'>
                      <p className='email_style_right'>E-mail</p>
                      <p className='email_style_det'>abcd@gmail.com</p>
                   </div>
                </div>
                <div className='message_wrapper'>
                   <div className='icon_left_side'>
                     <LocalPhoneIcon className='icon_style_in'/>
                   </div>
                   <div className='text_detail_right'>
                      <p className='email_style_right'>Phone Number</p>
                      <p className='email_style_det'>01746865451</p>
                   </div>
                </div>
                <div className='message_wrapper'>
                   <div className='icon_left_side'>
                     <FmdGoodIcon className='icon_style_in'/>
                   </div>
                   <div className='text_detail_right'>
                      <p className='email_style_right'>Address</p>
                      <p className='email_style_det'>66 Broklyant,India</p>
                   </div>
                </div>
             </div>
          </div>

        </div>

        <Work_witch_us_Component />
    </Wrapper_two_side>
  )
}

export default Two_side_Contact