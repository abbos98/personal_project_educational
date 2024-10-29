import { Wrapper_blog } from './blogStyle';
import "../Blog/blogadd.css";
import Left_side_Component from './left_side';
import Right_side_Component from './right_side';
import Work_witch_us_Component from '../AboutUs/work_with_us';

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

<Work_witch_us_Component />
  
    </Wrapper_blog>
  )
}

export default Blog_Component;