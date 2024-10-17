import { Wrapper_servises } from './servisesStyle';
import "../Servises/servisesadd.css";
import Six_boxes_contaniner from './6-boxes_1';
import Some_faq_ques from './Some_Faq_Question';
import Work_witch_us_Component from '../AboutUs/work_with_us';



const Servises_main = () => {
  return (
    <Wrapper_servises>
        <div className='Servises_main_image'>
             <p className='servises_style'>Service</p>
            <p className='home_style'>Home / Service</p>
        </div>
 
      <Six_boxes_contaniner />
      <Some_faq_ques />
      <Work_witch_us_Component />






      
    </Wrapper_servises>
  )
}

export default Servises_main;