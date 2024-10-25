import { Wrapper_navbar } from './navbarStyle';
import D_style from '../../assets/D.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PaymentIcon from '@mui/icons-material/Payment';
import AnchorTemporaryDrawer from './menu_three_line';

const NavbarComponent = () => {
  return (
    <Wrapper_navbar>
     <div className='wrapper_all_side'>
      <NavLink to={"/"} style={{textDecoration: "none"}}><div className='left_side'>
        <img className='d_style' src={D_style} alt='D_image'/>
         <p className='iziti'>iziti</p>
      </div></NavLink>

      <div className='center_side'>

         <NavLink to={'/'} style={{textDecoration: "none"}}><div className='button_wrap'>
            <a href='#home' className='testStyle'>Home</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={'/aboutus'} style={{textDecoration: "none"}}>
         <div className='button_wrap'>
         <a href='#About Us' className='testStyle'>About Us</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={"/servises"} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Services' className='testStyle'>Services</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={"/project"} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Projects' className='testStyle'>Projects</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <NavLink to={"/blog"} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Blog' className='testStyle'>Blog</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>
         <div className='button_wrap'>
         <a href='#Page' className='testStyle'>Page</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div>
         <NavLink to={"/contact"} style={{textDecoration: "none"}}><div className='button_wrap'>
         <a href='#Contact' className='testStyle'>Contact</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div></NavLink>

         <div className='login_and_cart_wrapper'>
           <div className='menu_wrapper'><AnchorTemporaryDrawer /></div>
           <NavLink to={"/login"}><LoginIcon className='login_style'/></NavLink>
           <div className='payment_style'><PaymentIcon /></div>
          
         </div>
      </div>

      <div className='right_side'>
        <button className='button_style'>Get a quote</button>
        <div className='arrow_style'><ArrowForwardIcon /></div>
      </div>
     </div>
    </Wrapper_navbar>
  )
}

export default NavbarComponent;