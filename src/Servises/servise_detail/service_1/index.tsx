import { Wrapper_first } from './serviceStyle';
import main_image from '../../../assets/main_image_two_person.jpg';
import frame from '../../../assets/left_icon_in.svg';
import { ClassNames } from '@emotion/react';
import plus from '../../../assets/plus_icon.svg';

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

          </div>

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
          </div>

        </div>
    </Wrapper_first>
  )
}

export default Service_first_cont