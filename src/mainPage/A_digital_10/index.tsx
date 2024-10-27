import image_one from '../../assets/business-partnership.jpg';
import { Sometihing } from './style';
import ver from '../../assets/Frame.svg';
import StarIcon from '@mui/icons-material/Star';
import person from '../../assets/person_image_five.jpg';
import left from '../../assets/Arrow 2.svg';
import  right from '../../assets/Arrow 1.svg';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const TstComponent = () => {
  return (
    <Sometihing>
        <div className='main'>
            <div className='left_side'>
               <img className='first_image' src={image_one}/>
            </div>

            <div className='right_side'>
              <div className='first'>
                <img className='var_style' src={ver} alt='image'/>
                <div className='star_wrappe'>
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star_white' />
                </div>
              </div>

              <div className='second'>
                <p className='long_text'>A digital agency is a company that helps the businesses achieve their online  through an services such  web design social media of a management, SEO, and  advertisin</p>
              </div>

               <div className='third'>
                <div className='person_wrapper'>
                   <div><img className='round_in' src={person} /></div>
                    <div className='text_wrap'> 
                       <p className='name'>Ronald Richards</p>
                       <p className='web'>Web Designer</p>
                    </div>
                </div>
                <div className='arrow_wrapper'>
                   <img className='left' src={left} alt='arrow'/>
                   <img className='right' src={right} alt='arrow'/>
                </div>
              </div>
            </div>
        </div>
    </Sometihing>
  )
}

export default TstComponent;