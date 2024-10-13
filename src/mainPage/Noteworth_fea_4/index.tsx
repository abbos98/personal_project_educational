import React from 'react'
import { Noteworth_wrapper } from './noteStyle';
import line_yellow from '../../assets/yellow_line.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image from '../../assets/digital-marketing-agency.jpg'


const NoteWorth_component = () => {
  return (
    <Noteworth_wrapper>
          <div className='wrapper_texts'>
           <img src={line_yellow} alt='icon'/>
           <p className='noteworthy_style'>Noteworthy Feature</p>
        </div>


        <div className='long_boxes_wrapper'>
             <div className='box_style'>
          <div className='num_text_wrapper'>
               <div className='left_side'>
                   <p className='zero_num'>01</p>
               </div>

               <div className='center_side'>
                  <p className='top_text'>Empower Your Digital Presence</p>
                  <p className='bottom_text'>Digital marketing involves promoting the a products or digital technolog Digital of am marketing Digital marketing involves</p>
               </div>
          </div>
               <div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
               </div>
               
             </div>

             <div className='box_style'>
          <div className='num_text_wrapper'>
               <div className='left_side'>
                   <p className='zero_num'>02</p>
               </div>

               <div className='center_side'>
                  <p className='top_text'>Transform Your Online Strategy</p>
                  <p className='bottom_text'>Digital marketing involves promoting the a products or digital technolog Digital of am marketing Digital marketing involves</p>
               </div>
          </div>
          <img className='image_style' src={image} />
               <div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
               </div>
             </div>

            
             <div className='box_style'>
          <div className='num_text_wrapper'>
               <div className='left_side'>
                   <p className='zero_num'>03</p>
               </div>

               <div className='center_side'>
                  <p className='top_text'>Shape Your Digital Future</p>
                  <p className='bottom_text'>Digital marketing involves promoting the a products or digital technolog Digital of am marketing Digital marketing involves</p>
               </div>
          </div>
               <div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
               </div>
             </div>
        </div>

    </Noteworth_wrapper>
  )
}

export default NoteWorth_component;