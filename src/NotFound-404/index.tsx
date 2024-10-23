import { Wrapper_404 } from './norFoundStyle';
import main_image from "../assets/404_image.jpg";

const Not_found_Component = () => {
  return (
    <Wrapper_404>
        <img className='main_style' src={main_image} alt='404_image'/>
    </Wrapper_404>
  )
}

export default Not_found_Component;