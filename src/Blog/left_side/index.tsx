import { Wrapper_left } from './left_sideStyle';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';


const Left_side_Component = () => {
  return (
    <Wrapper_left>
             <div className='left_side'>
            <div className='image_and_box_wrapper'>
              <div className='wid'>
                <div className='image_top'>
                   <div className='calendar_div'><PermContactCalendarIcon className='calendar_style' /></div>
                   <div className='data_wrapper'>23 Dec 2023</div>
                </div>
                <div className='box_wrapper'>
                   <div className='admin_category_wrapper'>
                       <div className='admin_wrap'>
                          <PermIdentityIcon className='person_id_style'/>
                          <p className='by_admin_Style'>By admin</p>
                       </div>
                       <div className='Category_wrapper'> 
                        <FolderIcon className='folder_style'/>
                        <p className='category'>Category</p>
                       </div>
                   </div>
                   <div className='long_text_wrapper'>
                     <p className='connect'>Connect Digitally Grow Exponentially Businesses Digitally Crafted for Digital Transforming</p>   
                   </div>
                   <NavLink to={"/projectDetail"} style={{textDecoration: "none"}}><div className='right_side_butt'>
                    <button className='but_style'>Read More</button>
                    <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
                    </div></NavLink>
                </div>
              </div>
              <div className='wid'>
                <div className='image_top'>
                   <div className='calendar_div'><PermContactCalendarIcon className='calendar_style' /></div>
                   <div className='data_wrapper'>23 Dec 2023</div>
                </div>
                <div className='box_wrapper'>
                   <div className='admin_category_wrapper'>
                       <div className='admin_wrap'>
                          <PermIdentityIcon className='person_id_style'/>
                          <p className='by_admin_Style'>By admin</p>
                       </div>
                       <div className='Category_wrapper'> 
                        <FolderIcon className='folder_style'/>
                        <p className='category'>Category</p>
                       </div>
                   </div>
                   <div className='long_text_wrapper'>
                     <p className='connect'>Connect Digitally Grow Exponentially Businesses Digitally Crafted for Digital Transforming</p>   
                   </div>
                  <NavLink to={"/projectDetail"} style={{textDecoration: "none"}}><div className='right_side_butt'>
                    <button className='but_style'>Read More</button>
                   <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
                  </div></NavLink>
                </div>
              </div>
              <div className='wid'>
                <div className='image_top'>
                   <div className='calendar_div'><PermContactCalendarIcon className='calendar_style' /></div>
                   <div className='data_wrapper'>23 Dec 2023</div>
                </div>
                <div className='box_wrapper'>
                   <div className='admin_category_wrapper'>
                       <div className='admin_wrap'>
                          <PermIdentityIcon className='person_id_style'/>
                          <p className='by_admin_Style'>By admin</p>
                       </div>
                       <div className='Category_wrapper'> 
                        <FolderIcon className='folder_style'/>
                        <p className='category'>Category</p>
                       </div>
                   </div>
                   <div className='long_text_wrapper'>
                     <p className='connect'>Connect Digitally Grow Exponentially Businesses Digitally Crafted for Digital Transforming</p>   
                   </div>
                   <NavLink to={"/projectDetail"} style={{textDecoration: "none"}}><div className='right_side_butt'>
                    <button className='but_style'>Read More</button>
                   <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
                   </div></NavLink>
                </div>
              </div>
            </div>
         </div>

    </Wrapper_left> 
  )
}

export default Left_side_Component