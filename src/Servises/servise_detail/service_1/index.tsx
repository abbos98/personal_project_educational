import { Wrapper_first } from './serviceStyle';
import main_image from '../../../assets/main_image_two_person.jpg';
import frame from '../../../assets/left_icon_in.svg';
import plus from '../../../assets/plus_icon.svg';
import "../../servise_detail/service_1/style.css";
import icon_right from '../../../assets/arrow_right_alt_18dp_000000_FILL0_wght400_GRAD0_opsz20.svg';
import down from '../../../assets/down.svg';
import first_icon from '../../../assets/first_icon_in.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import second_icon from '../../../assets/third_icon_in.svg';


const Service_first_cont = () => {
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
                 <p className='text_digital'>A digital agency is a company that provides creative, strategic, and technical development </p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Empowering Your Online Success of screen-based products and services</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Mobile App Development Services levate Your Digital Presence Innovate Your Brand Online</p>
                </div>
                <div className='text_and_icon'>
                 <img className='icon_style' src={frame} alt='icon_left'/>
                 <p className='text_digital'>Make Your Mark Online Where Ideas Go Digital</p>
                </div>
        </div>
            
        <div className='text_contanier'>
            <p className='style_in'>A digital agency is a company that provides creative, strategic, and technical development of screen-based products and services. From website design to social media </p>
        </div>

        <div className='bigger_text_contanier'>
            <p className='big'>Your Digital Partner in Growth</p>
            <p className='small'>A digital agency is a company that provides creative, strategic, and technical development of screen-based products and services. From website design to social media </p>
        </div>

        <div className='six_boxes_wrapper'>
          <div className='box_style'>
             <div className='round_in'><img src={first_icon} /></div>
             <p className='navigate_style'>Navigate the Digital Landscape  Engagement Digitally</p>
             <div className='bottom_side_in'>
            <div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div>
       </div>
          </div>
          <div className='box_style'>
             <div className='round_in'><img src={second_icon} /></div>
             <p className='navigate_style'>Empowering Your Online Go Digital Success</p>
             <div className='bottom_side_in'>
            <div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div>
       </div>
          </div>
        </div>
           
        <div className='Peak_Performance_Clinic'>
           <div className='text_peak'>
             <p className='main_text'>Peak Performance Clinic</p>
           </div>
        </div>    
         
        </div>
        
        <div className='main_right_all'>
          <div className='right_side_wrapper'>
             <div className='Servise_details_wrapper'>
               <p className='text_style_service'>Service Details</p>
                
                <div className='inputs_wrapper'>
                   <div className='input_style'>
                     <p className='identity_style'>Identity Design</p>
                    <div className='round'><img className='plus_style' src={plus} alt='plus'/></div>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Identity Design</p>
                    <div className='round'><img className='plus_style' src={plus} alt='plus'/></div>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Identity Design</p>
                    <div className='round'><img className='plus_style' src={plus} alt='plus'/></div>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Identity Design</p>
                    <div className='round'><img className='plus_style' src={plus} alt='plus'/></div>
                   </div>
                </div>
             </div>



          <div className='ready_to_work_wrapper'>
            <p className='ready_text'>Ready To Work With Us</p>

            <div className='button_wrapper'>
                <p className='quote_style'>Get A Quote</p> 
                <div className='round'><img src={icon_right} alt='icon'/></div>
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
        
           </Wrapper_first>
  )
}

export default Service_first_cont