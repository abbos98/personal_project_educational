import { Wrapper_two_side } from './twoSideStyle'

const Two_side_Contact = () => {
  return (
    <Wrapper_two_side>
        <div className='all_main_Wrapper'>
          <div className='left_side_wrapper'>
            <div className='top_side'>
              <p className='get_in_style'>Get In Touch</p>
              <p className='long_text_style'>Connect Digitally Grow The Exponentially</p>
              <p className='smaller_text_style'>A digital agency is a company that provides creative, strategic, and technical development of screen-based </p>
            </div>
               

            <div className='Get_an_appointment_wrapper'>
                <div className='get_an_style'>Get An Appointment</div>
                <div className="name_email_wrapper">
                   <input className='your_name' type="text" />   
                </div>
            </div>
          </div>

          <div className='right_side_wrapper'>
            
          </div>

        </div>
    </Wrapper_two_side>
  )
}

export default Two_side_Contact