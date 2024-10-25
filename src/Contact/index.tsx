import { Wrapper_Component } from './ContactStyle';
import "../Contact/Contactadd.css";
import Two_side_Contact from './two_side_1';

const Contact_Component = () => {
  return (
    <Wrapper_Component>
    <div className='main_image_Contact'>
      <p className='Contact_style'>Contact</p>
      <p className='home_Style'>Home / Contact</p>
    </div>


     <Two_side_Contact />



    </Wrapper_Component>
  )
}

export default Contact_Component;