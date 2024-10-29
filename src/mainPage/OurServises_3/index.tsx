import { Main_Wrap_OurSrvises } from './OurServisesStyle';
import icon from '../../assets/011-operation.svg';
import './OurServises.css';
import second_icon from '../../assets/second_ICON.svg';
import third_icon from '../../assets/third_icon.svg';
import fourth_icon from '../../assets/fourth_icon.svg';
import { NavLink } from 'react-router-dom';



const OurServisesComponents = () => {
  return (
    <Main_Wrap_OurSrvises>
    <div className='OurServise_main'>
    <div className='Top_texts_wrapper'>
      <p className='Our_Servises_style'>Our Services</p>
      <p className='long_texts_style'>Digital marketing involves promoting the a products or digital technolog</p>
    </div>
    
    <div className='line_under-wrapper'><div className='inside_line'></div></div>


     <div className='boxes_wrapper'>

       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='box_style'>
         <img className='icon_style' src={icon} alt='icon'/>
         <p className='Text_style_inside'>Web Design & Development</p>
       </div></NavLink>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='box_style'>
     
       <div className='Murodil_Wrapper'>
        <img className='Murodil_teacher' src={second_icon} />
        
         <div className='box_style_other'>
           
         </div>
      
         </div>
          
       </div></NavLink>
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='box_style'>
         <img className='icon_style' src={second_icon} alt='icon'/>
         <p className='Text_style_inside'>Digital Marketing</p>
       </div></NavLink> 
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='box_style'>
         <img className='icon_style' src={third_icon} alt='icon'/>
         <p className='Text_style_inside'>Branding & Identity</p>
       </div></NavLink> 
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='box_style'>
         <img className='icon_style' src={icon} alt='icon'/>
         <p className='Text_style_inside'>SEO Optimization</p>
       </div></NavLink> 
       <NavLink to={"/readmore"} style={{textDecoration: "none"}}><div className='box_style'>
         <img className='icon_style' src={fourth_icon} alt='icon'/>
         <p className='Text_style_inside'>Content Creation</p>
       </div></NavLink> 
      
     </div>

    
   

    </div>
    </Main_Wrap_OurSrvises>
  )
}

export default OurServisesComponents;