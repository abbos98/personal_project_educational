import AccordionUsage from './acardion';
import { Wrapper_question } from './SomeStyle';
import comp from '../../assets/work on comp.jpg';

const Some_faq_ques = () => {
  return (
    <Wrapper_question>
<div className='main_wrapper'>
       <div className='text_wrapper'>
         <p className='some_style'>Some FAQ Question</p>
       </div>


    <div className='all_side_wrapper'>

    
    <div className='left_side_wrapper'>
       <AccordionUsage />
    </div>

    <div className='right_side_wrapper'>
       <img className='rigth_image' src={comp} alt='right_image'/>
    </div>  

    </div>
</div>
   


    </Wrapper_question>
  )
}

export default Some_faq_ques;