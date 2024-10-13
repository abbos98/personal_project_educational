import { Wrapper_resent } from './resentStyle';
import line from '../../assets/yellow_line.png';
import up_two from '../../assets/photo_2024-10-09_14-00-18.jpg';
import calendar from '../../assets/calendar_month_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.svg';
import login from '../../assets/login copy.svg';
import comp from '../../assets/copyuter.jpg';
import second_small from '../../assets/second_small.jpg';

const Resent_updatesComponent = () => {
  return (
    <Wrapper_resent>
        <div className='Resent_uptadats_wrapper'>
      
      <div className='text_icon_wrapper'>
        <img className='line_style' src={line} alt='line'/>
        <p className='Recent_up_style'>Recent Updates</p>
      </div>
 
    <div className='three_boxes_wrapper'> 
       <div className='big_box'>
            <div className='left_side_up'>
              <img className='up_two_style' src={up_two} alt='image'/>
            </div>
 
            <div className='right_side_up'>
              <div className='time_wrapper_info'>
                <div className='october'>
                   <img className='calendar_style' src={calendar} alt='calendar_icon'/>
                   <p className='num_in_style'>October 19, 2023</p>
                </div>
 
                <div className='login'>
                   <img src={login} alt='login_icon'/>
                   <p className='by_admin_style'>By admin</p>
                </div>
              </div>
 
              <div className='text_container_in'>
                <p className='inside_pioner_text'>Pioneering Tomorrow's Technology Today
                Your IT Partner for Progress</p>
                <p className='taxi_style'>Taxi service refers to the transportation of serv passengers from one location to another using a hired vehicle</p>
              </div>
 
              <div className='butt_in_style'>
                 <button className='Read_more_style'>Read More</button>
              </div>
            </div>
       </div>
 
       <div className='small_boxes_wrapper'>
          <div className='small_left_box_wraeppr'>
           
            <div className='left_small_wrapper'>
                <img className='comp_img' src={comp} alt='image'/>
            </div>
 
            <div className='comp_inside_right'>
              <div className='comp_top_side'>
                <div className='calendar_side_small'>
                  <img src={calendar} alt='calendar'/>
                  <p className='october_small'>October 19, 2023</p>
                </div>
 
                <div className='by_admin_small_wrapper'>
                   <img src={login} alt='login_icon'/>
                   <p className='login_small'>By admin</p>
                </div>
                  
              </div>
 
              <div className='comp_center_side'>
                  <p className='head_texts_small'>Streamlining Success in Bits and the more Bytes</p>
                  <p className='tab_text_small'>There are many variations of the a passages of Lorem</p>
                  <button className='small_read'>Read More</button>
                </div>
 
                <div className='comp_bottom_side'>
                
                </div>
            </div>
 
 
          </div>
 
        
          <div className='small_left_box_wraeppr'>
           
           <div className='left_small_wrapper'>
               <img className='comp_img' src={second_small} alt='image'/>
           </div>
 
           <div className='comp_inside_right'>
             <div className='comp_top_side'>
               <div className='calendar_side_small'>
                 <img src={calendar} alt='calendar'/>
                 <p className='october_small'>October 19, 2023</p>
               </div>
 
               <div className='by_admin_small_wrapper'>
                  <img src={login} alt='login_icon'/>
                  <p className='login_small'>By admin</p>
               </div>
                 
             </div>
 
             <div className='comp_center_side'>
                 <p className='head_texts_small'>Connect Engage Thrive Driven Excellence</p>
                 <p className='tab_text_small'>There are many variations of the a passages of Lorem</p>
                 <button className='small_read'>Read More</button>
               </div>
 
               <div className='comp_bottom_side'>
               
               </div>
           </div>
 
 
         </div>
 
       </div>
    </div>
 
    </div>
 
    </Wrapper_resent>
  )
}

export default Resent_updatesComponent;