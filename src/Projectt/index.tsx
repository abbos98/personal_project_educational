import { Wrapper_Project } from './projectStyle';
import '../Projectt/projectadd.css';
import Project_images from './project_images_1';

const Project_component = () => {
  return (
    <Wrapper_Project>
        <div className='all_main_wrapper'>
            <div className='top_text_image'>
              <p className='project_style'>Project</p>
              <p className='second_style'>Home / Project</p>
            </div>
        </div>



    <Project_images />


    </Wrapper_Project>
  )
}

export default Project_component;