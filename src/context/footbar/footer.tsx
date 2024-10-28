import { Footer_test } from './footbarStyle';
import icon from '../../assets/D.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import SmsIcon from '@mui/icons-material/Sms';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import right from '../../assets/right_a.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import x_icon from '../../assets/x_icon.svg';

const Footer = () => {
  return (
    <Footer_test>

    <div className='main_main'>

    <div className='main_first'>

   <div className='left_side_top'>
        <div className='d_style'>
          <img className='icon_style' src={icon} alt='icon'/>
          <p className='iziti_style'>iziti</p>
        </div>
      
        <div className='texts_warpper'>
        <NavLink to={'/'} style={{textDecoration: "none"}}><div className='button_wrap'>
            <a href='#home' className='testStyle'>Home</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={'/aboutus'} style={{textDecoration: "none"}}>
         <div className='button_wrap'>
         <a href='#About Us' className='testStyle'>About Us</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={'/servises'} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Services' className='testStyle'>Services</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={'/project'} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Projects' className='testStyle'>Projects</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={'/blog'} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Blog' className='testStyle'>Blog</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={'/contact'} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Contact' className='testStyle'>Contact</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
        </div>
   </div>

    </div>

    {/* <div className='line'></div> */}
   
  
    <div className='main_second'>
      <div className='center_text_wrapper'>
          <p className='follow_us'>Follow Us</p>
          <div className='sns_wrapper'>
             <div className='facebook'><FacebookIcon className='facebook_sty'/></div>
             <div className='facebook'><img src={x_icon} alt='x_image'/></div>
             <div className='facebook'><p className='in_style'>in</p></div>
             <div className='facebook'><TelegramIcon className='telegram_style'/></div>
          </div>
          <p className='long_text'>It is a long established fact that a reader will be distracted</p>

      </div>

    <div className='Company_wrapper'>
      <p className='company_style'>Company</p>
      <p className='text_style_com'>About</p>
      <p className='text_style_com'>Service</p>
      <p className='text_style_com'>FAQ</p>
      <p className='text_style_com'>Blog Ang News</p>
    </div>

    <div className='Company_wrapper'>
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

    <div className='Company_wrapper'>
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





    </Footer_test>
  )
}

export default Footer;