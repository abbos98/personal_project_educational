import { Wrapper_smarter } from './growStyle';
import icon_one from '../../assets/first_icon.svg';
import people_image from '../../assets/two_people_image.jpg';



const Grow_Smarter_Component = () => {
  return (
    <Wrapper_smarter>
      <div className='main_main'> 
        <div className='left_side'>
        <div className='Why_chose_wraepper'>
         <p className='why_style'>Why Chose Us</p>
         <p className='grow_style'>Grow Smarter with  Marketing Ever</p>
         <p className='digital_style'>Digital marketing involves promoting products or services using digital technologies Digital marketing involves promoting products </p>
        </div>
         
        <div className='two_input_wrapper'>
           <div className='style_input'>
               <div className='icon_vs_text'>
                 <div className='round'><img src={icon_one}/></div>
                 <p className='drive_style'>Drive Engagement Digitally</p>
               </div>

               <div className='zero_one'>
                  <p className='num_style'>01</p>
               </div>
           </div>

           <div className='style_input'>
               <div className='icon_vs_text'>
                 <div className='round'><img src={icon_one}/></div>
                 <p className='drive_style'>Empower Your Digital Presence</p>
               </div>

               <div className='zero_one'>
                  <p className='num_style'>02</p>
               </div>
           </div>
        </div>

        </div>

        <div className='right_side'>
         <img className='people_image_style' src={people_image} alt='image'/>
        </div>
       </div>

       <div className='grade_wrapper'>
           <div className='complate_project'>
             <p className='ninteen'>80%</p>
             <p className='complete_style'>Complete Project</p>
           </div>
          
          <div className='line_in'></div>

          <div className='complate_project'>
             <p className='ninteen'>80%</p>
             <p className='complete_style'>Complete Project</p>
           </div>
          
          <div className='line_in'></div>

          <div className='complate_project'>
             <p className='ninteen'>80%</p>
             <p className='complete_style'>Complete Project</p>
           </div>


       </div>
    </Wrapper_smarter>
  )
}

export default Grow_Smarter_Component;