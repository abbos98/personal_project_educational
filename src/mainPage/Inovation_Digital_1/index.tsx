import { Inovation_Digital_wrapper } from './inovationStyle';
import right from '../../assets/right_allow.svg';

const Inovation_digital_component = () => {
  return (
    <Inovation_Digital_wrapper>
           <div className="Main_contaniner">
      <div className="firt_part_wrapper">
        <div className="texts_wrapper">
             <div className="first_line">
                <p className="text_style">INNOVATIVE</p>
                <div className="second_div"><p className="text_style_second">DIGITAL</p></div>
             </div>

             <div className="wrapper_second_line">
                <img className="right_style" src={right} alt="right"/>
                <p className="solution_style">SOLUTION</p>
             </div>
        </div>
</div>

         <div className="small_image">

          <div className="first_image_wrap"></div>

          <div className="secondImage_wrap"></div>

         </div>
         
      </div>
    </Inovation_Digital_wrapper>
  )
}

export default Inovation_digital_component;