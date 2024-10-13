import tul from '../../assets/black_white_two.jpg';
import set from '../../assets/black_white_three.jpg';
import net from '../../assets/istockphoto-1125743026-612x612.jpg';
import left_side_image from '../../assets/black-white_one.jpg';
import { Wrapper_latest_gallery } from './latest';

const Lates_galleryComponent = () => {
  return (
    <Wrapper_latest_gallery>
 
 <div className='all_main_wrapper'>
    <div className='Top_texts_wrapper'>
      <p className='Our_Servises_style'>Latest Gallery</p>
      <p className='long_texts_style'>Digital marketing involves promoting the a products or digital technolog</p>
    </div>
    
    <div className='line_under-wrapper'><div className='inside_line'></div></div>


    <div className='images_wrapper'>
       <img className='hana' src={left_side_image} alt='image'/>

       <div className='center_Wrapper'>
        <img className='style_two' src={tul} alt='image'/>
        <img className='style_three' src={set} alt='image'/>
       </div>

       <img className='net_style' src={net} alt='image'/>
    </div>
</div>
    </Wrapper_latest_gallery>
  )
}

export default Lates_galleryComponent;