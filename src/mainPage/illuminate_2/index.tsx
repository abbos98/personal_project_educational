import { Wrap_illuminate } from './iluminateStyle';
import yellow_line from '../../assets/yellow_line.png';
import person from '../../assets/person.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import roket from '../../assets/Search results for Rocket - Flaticon-12 3.png';
import stars from '../../assets/stars 4.svg';


const IlluminateCompanent = () => {
  return (
    <Wrap_illuminate>
      <div className='Main_illuminate'>
         <div className='first_line_vs_text'>
           <img className='yellow_line' src={yellow_line} alt='yellow_line'/>
           <p className='text_style'>Illuminate Your Online Potential Elevate Digital Game</p>
         </div>



         <div className='second_line_with_images'>
             
             <div className='inside_one'>
               <img className='person_style' src={person} alt='desiner'/>
             </div>

             <div className='inside_two'>
                <p className='text_head'>Designing the Future</p>
                <p className='text_tab'>Financial planners help people to gain knowledge aboutw toio invest and save their money in the most Fina planners help people to gain knowledge aboutw toio invest and save their money in the most Financial planners </p>

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

    <div className='yellow_line_wrapper'>
       <p className='presence_style'>Presence Solutions</p>
       <img className='stars_style' src={stars} alt='stars'/>
       <p className='presence_style'>Brilliance Studio</p>
       <img className='stars_style' src={stars} alt='stars'/>
       <p className='presence_style'>Digital Success</p>
       <img className='stars_style' src={stars} alt='stars'/>
    </div>


    </Wrap_illuminate>
  )
}

export default IlluminateCompanent