import { Wrapper_Illuminate } from './IlluminateStyle';
import yellow_line from '../../assets/yellow_line.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import roket from '../../assets/Search results for Rocket - Flaticon-12 3.png';
import './illuminateadd.css';

const Illuminate_component = () => {
  return (
    <Wrapper_Illuminate>
  <div className='Main_illuminate'>
         <div className='first_line_vs_text'>
           <img className='yellow_line' src={yellow_line} alt='yellow_line'/>
           <p className='text_style'>Illuminate Your Online Potential Elevate Digital Game</p>
         </div>



         <div className='second_line_with_images'>
             
             <div className='inside_one'>
               {/* <img className='person_style' src={music} alt='desiner'/> */}
               <div className='image_of_music'></div>
             </div>

             <div className='inside_two'>
                <p className='text_head'>Designing the Future</p>
                <p className='text_tab'>Financial planners help people to gain knowledge aboutw toio invest and save their money in the most Fina planners help people to gain knowledge aboutw toio invest and save their money in the most Financial planners help people to gain knowledge aboutw toio invest and save their money in the most Financial planners help people to gain knowledge aboutw toio invest and save their money</p>

                <div className='main_wrap_tel'>
                    <div className='tel_wrap'>
                      <LocalPhoneIcon className='tel_style' />
                    </div>
                    <div className='text_inside'>
                      <p className='need_style'>Need help?</p>
                      <p className='num_style'>(808) 555-0111</p>
                    </div>
                </div>
             </div>

          <div className='third_line'>
            <div className='wrapper_in'>
              <img className='roket_style' src={roket} alt='roket'/>
              <p className='three_style'>3k+</p>
            </div>
             
            <div className='text_container'>
              <p className='website_style'>Website Lounged</p>
              <p className='more_text_style'>A digital agency is a company that helps businesses achieve their online </p>
            </div>
         </div>   

             
        </div>

       </div>
    </Wrapper_Illuminate>
  )
}

export default Illuminate_component;