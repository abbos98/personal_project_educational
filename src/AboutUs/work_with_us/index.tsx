import React from 'react'
import { Wrapper_work_with } from './work_withStyle';
import one from '../../assets/D.png';
import SmsIcon from '@mui/icons-material/Sms';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import right from '../../assets/right_a.svg';

const Work_witch_us_Component = () => {
  return (
    <Wrapper_work_with>
        <div className='main_main'>
            <div className='firts_line'>
              <p className='work_with_us'>Work With Us</p>
            </div> 
            <div className='second_line'>
             <div className='one'>
               <div className='D_style_wrapper'>
                 <img className='icon_style' src={one} alt='icon'/>
                 <p className='iziti_style'>iziti</p>
               </div> 

               <div className='text_style'>
                <p className='it_is'>It is a long established fact will be distracted</p>
               </div>

               <div className='follow_us'>
                <p className='follow_style'>Follow Us</p>
               </div>
               <div className='sns_wrapper'>
             <div className='facebook'></div>
             <div className='facebook'></div>
             <div className='facebook'></div>
             <div className='facebook'></div>
          </div>
             </div>
             <div className='Company_wrapper'>
               <p className='company_style'>Company</p>
               <p className='text_style_com'>About</p>
               <p className='text_style_com'>Service</p>
               <p className='text_style_com'>FAQ</p>
               <p className='text_style_com'>Blog Ang News</p>
             </div>
             <div className='Company_wrapper_two'>
      <p className='company_style'>Contact</p>
      <div className='sms_wrapper'>
         <SmsIcon  className='sms_icon'/>
         <p className='email'>debra.holt@example.com</p>
      </div>
      <div className='location_wrapper'>
        <EditLocationIcon className='location_style'/>
        <p className='address_style'>3891 Ranchview Richardson, California 62639</p>
      </div>
             </div>
             <div className='Company_wrapper_three'>
      <p className='company_style'>Newslatter </p>
      <p className='Establish'>It is a long established fact that a reader will be distracted</p>
      <div className='input_wrap'>
      <input className='your_email_style' type="text" placeholder='Your e-mail'/>
      <div className='but_yellow'><img src={right} /></div> 
       </div>
             </div>
            </div> 
            <div className='main_third'>
       <div className='bottom_left'>
         <p className='rights'>© Yoursitename  2024 | All Rights Reserved</p>
       </div>

       <div className='bottom_right'>
        <p className='texts_last_style'>Terms & Condition</p>
        <p className='texts_last_style'>Privacy Policy</p>
        <p className='texts_last_style'>Contact Us</p>
       </div>
            </div>

        </div>
    </Wrapper_work_with>
  )
}

export default Work_witch_us_Component;