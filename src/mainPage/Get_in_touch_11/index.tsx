import { Main_get } from './get_inStyle';
import first_icon from '../../assets/location.svg';
import second_icon from '../../assets/telefon_icon.svg';
import third_icon from '../../assets/message.svg';

const Get_in_TouchComponent = () => {
  return (
    <Main_get>
      <div className='all_main_wrapper'>
        <div className='left_side'>
           <div className='texts_wrapper'>
              <p className='get_in_touch'>gET iN tOUCH</p>
              <p className='Your_it'>Your IT Partner for Meets Progress</p>
           </div>

        <div className='all_icons_wrapper'>

            <div className='address_wrap'>
              <div className='round'><img src={first_icon} alt='icon'/></div>
                <div className='texts_wtapper_in'>
                  <p className='address'>Phone Number</p>
                  <p className='detail_address'>012 345 678 9101</p>
                </div>
            </div>

            <div className='address_wrap'>
              <div className='round'><img src={second_icon} alt='icon'/></div>
                <div className='texts_wtapper_in'>
                  <p className='address'>Address</p>
                  <p className='detail_address'>66 Broklyant,India</p>
                </div>
            </div>

            <div className='address_wrap'>
              <div className='round'><img src={third_icon} alt='icon'/></div>
                <div className='texts_wtapper_in'>
                  <p className='address'>Email</p>
                  <p className='detail_address'>abcd@gmail.com</p>
                </div>
            </div>

        </div>

        </div>

        <div className='right_side'>
          <div className='text_get_quote_wrapper'>
            <p className='get_a_quote'>Get A qUOTE</p>
            <p className='unleshing_style'>Unleashing Digital</p>
          </div>

          <div className='input_wrapper'>

              <div className='top_wrap'>
                 <input className='First_name_style' type="text"  placeholder='First Name...'/>
                 <input className='Your_Phone_style' type="tel"  placeholder='Your Phone...'/>
              </div>
              <div className='bottom_wrap'>
                 <input className='Phone_Number_style' type="tel"  placeholder='Phone Number'/>
                 <input className='Chose_a_Opation' list='test' type="text"  placeholder='Chose a Opation'/>
                 <datalist id='test'>
                    <option value="option-1"/>
                    <option value="option-2"/>
                    <option value="option-3"/>
                 </datalist>
              
              </div>
              <div className='email_vs_butt_wrapper'>
                 <input className='text_area' type='textarea' placeholder='Your E-mail...' />
                <button className='sent_now'>sENT nOW</button>
              </div>
          </div>
        </div>
      </div>
    </Main_get>
  )
}

export default Get_in_TouchComponent;