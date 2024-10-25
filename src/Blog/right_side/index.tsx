import { Wrapper_right } from './right_sideStyle';
import SearchIcon from '@mui/icons-material/Search';
import FolderIcon from '@mui/icons-material/Folder';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Right_side_Component = () => {
  return (
    <Wrapper_right>
         <div className='right_side_main'>
             <div className='one'>
                <p className='search_style'>Search</p>
                <div className='wrapper_input_search'>
                  <input className='input_style' type="text" placeholder='type here'/>  
                  <SearchIcon className='search_icon_style' />
                </div>
             </div>
             <div className='two'>
               <div className='text_recent_wrapper'>
                  <p className='text_rec_post_style'>Recent post</p>
               </div>

               <div className='three_boxes_wrapper'>
                  <div className='box_Style'>
                      <div className='top_box_part'>
                        <FolderIcon className='folder_style'/>
                        <p className='category_style'>Category</p>
                      </div>
                      <div className='long_text_wrapper'>
                         <p className='text_transform_Style'>Transforming Businesses The Digitally Crafted</p>
                      </div>     
                  </div>
                  <div className='box_Style'>
                      <div className='top_box_part'>
                        <FolderIcon className='folder_style'/>
                        <p className='category_style'>Category</p>
                      </div>
                      <div className='long_text_wrapper'>
                         <p className='text_transform_Style'>Transforming Businesses The Digitally Crafted</p>
                      </div>     
                  </div>
                  <div className='box_Style'>
                      <div className='top_box_part'>
                        <FolderIcon className='folder_style'/>
                        <p className='category_style'>Category</p>
                      </div>
                      <div className='long_text_wrapper'>
                         <p className='text_transform_Style'>Transforming Businesses The Digitally Crafted</p>
                      </div>     
                  </div>
               </div>
             </div>
             <div className='three'>
             <div className='Servise_details_wrapper'>
               <p className='text_style_service'>Catagory</p>
                
                <div className='inputs_wrapper'>
                   <div className='input_style'>
                     <p className='identity_style'>Identity Design</p>
                    <p className='zero_one'>01</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Platform Setup</p>
                    <p className='zero_one'>02</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Marketing Automation</p>
                    <p className='zero_one'>03</p>
                   </div>
                   <div className='input_style'>
                     <p className='identity_style'>Marketing Campaigns</p>
                    <p className='zero_one'>04</p>
                   </div>
                </div>
             </div>



             </div>
             <div className='four'>
               <p className='get_Touch'>GET TOUCH</p>
               <div className='round_get'><LocalPhoneIcon className='phone_style'/></div>
               <p className='for_fast_style'>For fast service</p>
               <p className='number_style'>(+888) 123 456 765</p>
             </div>
            <div className='five'>
                <p className='tags_Style'>Tags</p>
               <div className='tages_wrapper'>
                <div className='one-3_wrapper'>
                <div className='first_line_tags'>
                   <div className='first_tag'>Platform Setup</div>
                </div>
                <div className='second_line_tags'>
                   <div className='second_tag'>Identity</div>
                </div>
                <div className='third_line_tags'>
                   <div className='third_tag'>SEO</div>
                </div>
                </div>
                <div className='four_6_wrapper'>
                <div className='fourth_line_tags'>
                  <div className='fourth_tag'>Consulting</div>
                </div>
                <div className='fifth_line_tags'>
                  <div className='fifth_tag'>Media</div>
                </div>
                <div className='six_line_tags'>
                  <div className='six_tag'>Optimization</div>
                </div>
                </div>
               </div>
            </div>
         </div>
    </Wrapper_right>
  )
}

export default Right_side_Component