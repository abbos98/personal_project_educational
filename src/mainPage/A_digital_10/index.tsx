import image_one from '../../assets/business-partnership.jpg';
import image_two from '../../assets/digital-marketing-agency.jpg';
import { Sometihing } from './style';

const TstComponent = () => {
  return (
    <Sometihing>
        <div className='main'>
            <div className='left_side'>
               <img src={image_one}/>
            </div>

            <div className='right_side'>
            <img src={image_two}/>
            </div>
        </div>
    </Sometihing>
  )
}

export default TstComponent;