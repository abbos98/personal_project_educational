import { Wrapper_blog } from './blogStyle';
import "../Blog/blogadd.css";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Left_side_Component from './left_side';
import Right_side_Component from './right_side';

const Blog_Component = () => {
  return (
    <Wrapper_blog>
   
    <div className='main_image_top'>
      <p className='blog_style'>Blog</p>
      <p className='home_style'>Home / Blog</p>
    </div>

    
<div className='sides_main_all'>
    <div className='all_side_wrapper'>
        <div className='left_side'>
          <Left_side_Component />
        </div>
        <div className='right_side'>
           <Right_side_Component />
        </div>
    </div>
</div>


        {/* <div className='main_all_wrapper'>
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
                   <div className='right_side_butt'>
                    <button className='but_style'>Read More</button>
                   <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div>
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
                   <div className='right_side_butt'>
                    <button className='but_style'>Read More</button>
                   <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div>
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
                   <div className='right_side_butt'>
                    <button className='but_style'>Read More</button>
                   <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div>
                </div>
              </div>
            </div>
         </div>

         <div className='right_side_main'>
             <div className='one'>

             </div>
             <div className='two'>

             </div>
             <div className='three'>

             </div>
             <div className='five'>

             </div>
             
         </div>
        </div> */}
    </Wrapper_blog>
  )
}

export default Blog_Component;