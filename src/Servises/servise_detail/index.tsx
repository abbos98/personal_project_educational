import { Wrapper_servise_detail } from './serviseDetail';
import "../servise_detail/add.css";
import Service_first_cont from './service_1';
import AccordionDetail from './acardion_in_detail';
import Work_witch_us_Component from '../../AboutUs/work_with_us';



const Servise_detail = () => {
  return (
    <Wrapper_servise_detail>
        <div className='main_all'>
          <p className='servise_style'>Service Details</p>
          <p className='home_style'>Home / Service Details</p>
        </div>



        <Service_first_cont />
        <AccordionDetail />
        <Work_witch_us_Component />
    
   
     
        
    </Wrapper_servise_detail>
  )
}

export default Servise_detail;