import { Wrapper_first } from './first_part';
import main_image from '../../../assets/main_image_two_person.jpg';
import frame from '../../../assets/left_icon_in.svg';
import down from '../../../assets/down.svg';
import icon_right from '../../../assets/arrow_right_alt_18dp_000000_FILL0_wght400_GRAD0_opsz20.svg';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import "../first_part_projectDetail/first_partadd.css";
import Work_witch_us_Component from '../../../AboutUs/work_with_us';

const Project_detail_first = () => {
  return (
    <Wrapper_first>
       <div className='all_wrapper'>
          <div className='left_side_wrapper'>
            <img className='image_style' src={main_image} alt='image'/>
           

        <div className='texts_wrapper'>
              <p className='inovate_text'>Innovate Your Brand Online</p>
              <p className='long_text'>A digital agency is a company that provides creative, strategic, and technical development of screen-based products and services. From website design to social media management, digital agencies help businesses thrive in the online realm</p>
        </div>

        <div className='wrapper_text'>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>SEO Strategy Consulting</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Empowering Your Online Success</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Mobile App Development Services</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Social Media Optimizationl</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Website Development & Maintenance</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Connect Digitally, Grow Exponentially</p>
                </div>
        </div>
            
              <img className='image_style_two' src={main_image} alt='image'/>


              <div className='text_wrapper_smaller'>
                <p className='long_text_in'>A digital agency is a company that provides creative, strategic, and technical development of screen-based products and services. From website design to social media management, digital agencies help businesses thrive in the online realm</p>
              </div>

              <div className='last_text_wrapper_with_input'>
                  <p className='your_deg_in'>Your Digital Partner in Growth</p>
                  <p className='littel_text'>A digital agency is a company that provides creative, strategic, and technical development of screen-based products and services. From website design to social media</p>
                 
                  <div className='previus_post_wrap'>
                    <div className='left_side_previus'>
                      <NavigateBeforeIcon className='text_left'/>
                      <p className='previous_text_style'>Previous post</p>
                    </div>

                    <div className='right_side_next'>
                      <p className='next_post'>Next post</p>
                      <ChevronRightIcon className='right_text_style'/>
                    </div>
                    
                  </div>
              </div>
        </div>
        
        <div className='main_right_all'>
          <div className='right_side_wrapper'>
             <div className='Servise_details_wrapper'>
             
                <div className='inputs_wrapper'>

                   <div className='input_style'>
                     <p className='identity_style'>Project Information</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Category:</p>
                     <p className='identity_text'>Digital Agency</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Customer:</p>
                     <p className='identity_text'>Fahad Hossain</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Start date:</p>
                     <p className='identity_text'>21 August 2024</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>End date:</p>
                     <p className='identity_text'>28 September 2024</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Rating:</p>
                      <div className='stars_wrapper'>
                         <StarIcon className='star_style'/>
                         <StarIcon className='star_style'/>
                         <StarIcon className='star_style'/>
                         <StarIcon className='star_style'/>
                         <StarIcon className='star_style'/>
                      </div>
                   </div>
                   
                   <div className='icons_wrap'>
                        <div className='icon_round'><p className='icon_in'>in</p></div>
                        <div className='icon_round'><FacebookIcon className='facebook_style'/></div>
                        <div className='icon_round'><InstagramIcon className='instagram_style' /></div>
                        <div className='icon_round'><TelegramIcon className='telegram_style'/></div>
                   </div>
                </div>
             </div>


          <div className='ready_to_work_wrapper'>
            <p className='ready_text'>Ready To Work With Us</p>

            <div className='button_wrapper'>
                <p className='quote_style'>Get A Quote</p> 
                <div className='round'><img className='icon_in_style' src={icon_right} alt='icon'/></div>
            </div>
          
          </div>



           <div className='downland_wrapper'>
              <div className='first_line_down'>
                  <div><p className='company_style'>Company File</p></div>

                  <div className='memory_icon_wrap'>
                    <p className='memory'>(1.5Mb)</p>
                    <img src={down} alt='downland'/>
                  </div>
              </div>
              <div className='first_line_down'>
                  <div><p className='company_style'>Project File</p></div>

                  <div className='memory_icon_wrap'>
                    <p className='memory'>(1.5Mb)</p>
                    <img src={down} alt='downland'/>
                  </div>
              </div>
           </div>
          
          </div>
        </div>
       </div>
  
    <Work_witch_us_Component />

    </Wrapper_first>
  )
}

export default Project_detail_first;