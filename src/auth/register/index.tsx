import { Wrapper_reg } from './registerStyle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { NavLink } from 'react-router-dom';


const Register_Component = () => {
  return (
    <Wrapper_reg>
         <div className="register_box"> 
             <div className='first_line'>
               <p className='create_account_Style'>Create Account</p>
             </div>
             <div className='second_line'>
                <div className='icon_wrapper'>
                    <PersonIcon className='person_style'/>
                    <input className='input_style' type="text" placeholder='Name'/>
                </div>
                <div className='icon_wrapper'>
                    <EmailIcon className='person_style'/>
                    <input className='input_style' type="text" placeholder='Email'/>
                </div>
                <div className='icon_wrapper'>
                    <LockIcon className='person_style'/>
                    <input className='input_style' type="text" placeholder='Password'/>
                </div>
               
             </div>
             <div className='third_line'>
               <NavLink to={"/"}><button className='button_Style_in'>Sign Up</button></NavLink>
               <button className='button_Style_in'>Sign In</button>
             </div>
          </div>
    </Wrapper_reg>
  )
}

export default Register_Component;