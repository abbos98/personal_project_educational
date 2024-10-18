import { Wrapper_six_box } from './sixBoxesStyle';
import icon from '../../assets/first_icon_in.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import icon_second from '../../assets/third_icon_in.svg';
import icon_third from '../../assets/fourth_icon_in.svg';
import { NavLink } from 'react-router-dom';


const Six_boxes_Component = () => {
  return (
    <Wrapper_six_box>
       
<div className='all_Wrapper'> 
   <div className='boxes_wrapper'>
     <div className='box_Style'>
       <div className='top_side_in'>
          <div className='round'><img src={icon} /></div>
          <p className='text_navigare'>Navigate the Digital Lands cape</p>
       </div>
       <div className='center_side_in'>
         <p className='long_text_style'>Digital marketing involves promoting products services using digital technologies </p>
       </div>
       <div className='bottom_side_in'>
            <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div></NavLink>
       </div>

     </div>
     <div className='box_Style'>

       <div className='top_side_in'>
          <div className='round'><img src={icon_second} /></div>
          <p className='text_navigare'>Dominate the Online Digital Strategy</p>
       </div>
       <div className='center_side_in'>
         <p className='long_text_style'>Digital marketing involves promoting products services using digital technologies </p>
       </div>
       <div className='bottom_side_in'>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div></NavLink>
       </div>

     </div>
     <div className='box_Style'>

       <div className='top_side_in'>
          <div className='round'><img src={icon_third} /></div>
          <p className='text_navigare'>Elevate Your Brand Big  Online Presence</p>
       </div>
       <div className='center_side_in'>
         <p className='long_text_style'>Digital marketing involves promoting products services using digital technologies </p>
       </div>
       <div className='bottom_side_in'>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div></NavLink>
       </div>

     </div>
     <div className='box_Style'>

       <div className='top_side_in'>
          <div className='round'><img src={icon_third} /></div>
          <p className='text_navigare'>Elevate Your Online Presence Defined</p>
       </div>
       <div className='center_side_in'>
         <p className='long_text_style'>Digital marketing involves promoting products services using digital technologies </p>
       </div>
       <div className='bottom_side_in'>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div></NavLink>
       </div>

     </div>
     <div className='box_Style'>

       <div className='top_side_in'>
          <div className='round'><img src={icon} /></div>
          <p className='text_navigare'>Transforming Brands Digitally Digital </p>
       </div>
       <div className='center_side_in'>
         <p className='long_text_style'>Digital marketing involves promoting products services using digital technologies </p>
       </div>
       <div className='bottom_side_in'>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div></NavLink>
       </div>

     </div>
     <div className='box_Style'>

       <div className='top_side_in'>
          <div className='round'><img src={icon_second} /></div>
          <p className='text_navigare'>Powering Your Digital Journey Solutions</p>
       </div>
       <div className='center_side_in'>
         <p className='long_text_style'>Digital marketing involves promoting products services using digital technologies </p>
       </div>
       <div className='bottom_side_in'>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='right_side'>
                <button className='but_style'>Read More</button>
                <div className='right_allow'><ArrowForwardIcon className='icon_style' /></div>
            </div></NavLink>
       </div>

     </div>
   </div>
</div> 
    </Wrapper_six_box>
  )
}

export default Six_boxes_Component;