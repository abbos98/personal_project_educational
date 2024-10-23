import { Wrapper_pro_Detail } from './projectDetailStyle';
import "../../Projectt/project_detail/projectDetailAdd.css";
import Project_detail_first from './first_part_projectDetail';

const Project_Detail_Component = () => {
  return (
    <Wrapper_pro_Detail>
        <div className='wrapper_main_image'>
           <p className='project_style'>Project Details</p>
           <p className='project_home'>Home / Project Detail</p>
        </div>



    <Project_detail_first />


    </Wrapper_pro_Detail>
  )
}

export default Project_Detail_Component;