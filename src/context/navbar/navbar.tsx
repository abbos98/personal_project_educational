import { Wrapper_navbar } from './navbarStyle';
import D_style from '../../assets/D.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Wrapper_navbar>
     <div className='wrapper_all_side'>
      <div className='left_side'>
        <img className='d_style' src={D_style} alt='D_image'/>
         <p className='iziti'>iziti</p>
      </div>

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
         <div className='button_wrap'>
         <a href='#Services' className='testStyle'>Services</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div>
         <div className='button_wrap'>
         <a href='#Projects' className='testStyle'>Projects</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div>
         <div className='button_wrap'>
         <a href='#Blog' className='testStyle'>Blog</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div>
         <div className='button_wrap'>
         <a href='#Page' className='testStyle'>Page</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div>
         <div className='button_wrap'>
         <a href='#Contact' className='testStyle'>Contact</a>
            <KeyboardArrowDownIcon className='icon_style'/>
         </div>
      </div>

      <div className='right_side'>
        <button className='button_style'>Get a quote</button>
        <ArrowForwardIcon className='arrow_style'/>
      </div>
     </div>
    </Wrapper_navbar>
  )
}

export default NavbarComponent;