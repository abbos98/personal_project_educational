import { Wrapper_six } from './boxesStyl;e';
import first_icon from '../../assets/navigate_icon.svg';
import right from '../../assets/east_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg';
import third_icon from '../../assets/third_icon_in.svg';
import fourth_icon from '../../assets/fourth_icon_in.svg';
import { NavLink } from 'react-router-dom';

const Six_boxes_contaniner = () => {
  return (
    <Wrapper_six>
      <div className='all_main_wrapper'>
        <div className='six_boxes_wrapper'>
          <div className='box_style'>

             <div className='top_line'>
               <div className='round_style'>
                 <img className='icon_style' src={first_icon} alt='icon'/>
               </div>
               <div className='text_left_wrapper'>
                <p className='naviga_style'>Navigate the Digital Lands cape</p>
               </div>
             </div>

             <div className='center_line'>
               <p className='text_style_digital'>Digital marketing involves promoting products services using digital technologies </p>
             </div>

             <div className='bottom_line'>
               <NavLink to={"/readmore"} style={{textDecoration:"none"}}><div className='buttom_style'>
                  <p className='read_more_style'>Read More</p>
                  <div className='right_icon_wrapper'>
                    <img className='right_style' src={right} alt='right_allow_icon'/>
                  </div>
               </div></NavLink>
             </div>

          </div>
          <div className='box_style'>
<div className='top_line'>
  <div className='round_style'>
    <img className='icon_style' src={fourth_icon} alt='icon'/>
  </div>
  <div className='text_left_wrapper'>
   <p className='naviga_style'>Dominate the Online Digital Strategy</p>
  </div>
</div>

<div className='center_line'>
  <p className='text_style_digital'>Digital marketing involves promoting products services using digital technologies </p>
</div>

<div className='bottom_line'>
<NavLink to={"/readmore"} style={{textDecoration:"none"}}><div className='buttom_style'>
     <p className='read_more_style'>Read More</p>
     <div className='right_icon_wrapper'>
       <img className='right_style' src={right} alt='right_allow_icon'/>
     </div>
  </div></NavLink>
</div>

          </div>
          <div className='box_style'>

<div className='top_line'>
  <div className='round_style'>
    <img className='icon_style' src={third_icon} alt='icon'/>
  </div>
  <div className='text_left_wrapper'>
   <p className='naviga_style'>Elevate Your Brand Big  Online Presence</p>
  </div>
</div>

<div className='center_line'>
  <p className='text_style_digital'>Digital marketing involves promoting products services using digital technologies </p>
</div>

<div className='bottom_line'>
<NavLink to={"/readmore"} style={{textDecoration:"none"}}><div className='buttom_style'>
     <p className='read_more_style'>Read More</p>
     <div className='right_icon_wrapper'>
       <img className='right_style' src={right} alt='right_allow_icon'/>
     </div>
  </div></NavLink>
</div>

          </div>
          <div className='box_style'>

<div className='top_line'>
  <div className='round_style'>
    <img className='icon_style' src={fourth_icon} alt='icon'/>
  </div>
  <div className='text_left_wrapper'>
   <p className='naviga_style'>Elevate Your Online Presence Defined</p>
  </div>
</div>

<div className='center_line'>
  <p className='text_style_digital'>Digital marketing involves promoting products services using digital technologies </p>
</div>

<div className='bottom_line'>
<NavLink to={"/readmore"} style={{textDecoration:"none"}}><div className='buttom_style'>
     <p className='read_more_style'>Read More</p>
     <div className='right_icon_wrapper'>
       <img className='right_style' src={right} alt='right_allow_icon'/>
     </div>
  </div></NavLink>
</div>

          </div>
          <div className='box_style'>

<div className='top_line'>
  <div className='round_style'>
    <img className='icon_style' src={fourth_icon} alt='icon'/>
  </div>
  <div className='text_left_wrapper'>
   <p className='naviga_style'>Transforming Brands Digitally Digital </p>
  </div>
</div>

<div className='center_line'>
  <p className='text_style_digital'>Digital marketing involves promoting products services using digital technologies </p>
</div>

<div className='bottom_line'>
<NavLink to={"/readmore"} style={{textDecoration:"none"}}><div className='buttom_style'>
     <p className='read_more_style'>Read More</p>
     <div className='right_icon_wrapper'>
       <img className='right_style' src={right} alt='right_allow_icon'/>
     </div>
  </div></NavLink>
</div>

          </div>
          <div className='box_style'>

<div className='top_line'>
  <div className='round_style'>
    <img className='icon_style' src={third_icon} alt='icon'/>
  </div>
  <div className='text_left_wrapper'>
   <p className='naviga_style'>Powering Your Digital Journey Solutions</p>
  </div>
</div>

<div className='center_line'>
  <p className='text_style_digital'>Digital marketing involves promoting products services using digital technologies </p>
</div>

<div className='bottom_line'>
<NavLink to={"/readmore"} style={{textDecoration:"none"}}><div className='buttom_style'>
     <p className='read_more_style'>Read More</p>
     <div className='right_icon_wrapper'>
       <img className='right_style' src={right} alt='right_allow_icon'/>
     </div>
  </div></NavLink>
</div>

          </div>
         </div>
       </div>
    </Wrapper_six>
  )
}

export default Six_boxes_contaniner;