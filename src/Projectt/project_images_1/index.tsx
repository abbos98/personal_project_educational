import { Wrapper_images } from './imagesStyle';
import "../../Projectt/project_images_1/image_styleadd.css";
import Some_faq_ques from '../../Servises/Some_Faq_Question';
import Work_witch_us_Component from '../../AboutUs/work_with_us';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NavLink } from 'react-router-dom';

const Project_images = () => {
  return (
    <Wrapper_images>
    <div className='image_all_wrapper'>
       <div className='first_image_one'>
         <NavLink to={"/projectDetail"}><div className='one_Style_wrapper'><div className='round'><div className='arrow_style'><ArrowRightAltIcon /></div></div></div></NavLink>
         <NavLink to={"/projectDetail"}><div className='two_Style_wrapper'><div className='round'><div className='arrow_style'><ArrowRightAltIcon /></div></div></div></NavLink>
       </div>
      
      <div className='second_line'>
        <NavLink to={"/projectDetail"}><div className='three_Style_wrapper'><div className='round'><div className='arrow_style'><ArrowRightAltIcon /></div></div></div></NavLink>
        <NavLink to={"/projectDetail"}><div className='four_Style_wrapper'><div className='round'><div className='arrow_style'><ArrowRightAltIcon /></div></div></div></NavLink>
      </div>

      <div className='third_line'>
        <NavLink to={"/projectDetail"}><div className='five_Style_wrapper'><div className='round'><div className='arrow_style'><ArrowRightAltIcon /></div></div></div></NavLink>
        <NavLink to={"/projectDetail"}><div className='six_Style_wrapper'><div className='round'><div className='arrow_style'><ArrowRightAltIcon /></div></div></div></NavLink>
      </div>

    </div>

    <Some_faq_ques />
    <Work_witch_us_Component />
    </Wrapper_images>
  )
}

export default Project_images;