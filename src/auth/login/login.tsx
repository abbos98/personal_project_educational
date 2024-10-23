import { Wrapper_Login } from "../login/auth";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from "react-router-dom";


const Login_Component = () => {
  return (
    <Wrapper_Login>
          <div className="login_box"> 
             <div className="first_line">
               <p className="login_style">Login</p>
               <p className="small_text">Please enter your login and password</p>
             </div>
             <div className="second_line_wrap">
             <div className="second_line">
               <input className="username_wrapper" type="text" placeholder="Username"/>
             </div>
             <div className="second_line">
               <input className="username_wrapper" type="text" placeholder="Password"/>
             </div>
             </div>
             <div className="third_line">
                <p className="forgot_style">Forgot password?</p>
                <button className="button_Styke">Login</button>
             </div>
             <div className="fourt_line">
               <TelegramIcon className="telegram_style"/>
               <InstagramIcon className="instagram_style" />
               <FacebookIcon  className="facebook_style"/>
             </div>
             <div className="create_acc_wrapper">
               <NavLink to={"/register"} style={{textDecoration: "none"}}><button className="create_style">Create Account</button></NavLink>
             </div>
          </div>
    </Wrapper_Login>
  )
}

export default Login_Component;