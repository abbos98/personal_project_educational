import { Main_carusel } from './CaruselStyle';
import './CarouselAdd.css';
import line_yellow from '../../assets/yellow_line.png';
import { teamMember } from '../../mock/teamDate';
import { NavLink } from 'react-router-dom';

const CaruselComponent = () => {

const data = teamMember.detail;
console.log(data);
  return (
    <Main_carusel>
        <div className='iconYellow_text_wrap'>
              <img className='icon_yellow_style' src={line_yellow} alt='icon_yellow'/>
              <p className='Our_style'>Our Best Team</p>
         </div>



        
        <NavLink to={"/team"}><div className='contanier'>
            <div className='carousel'>
               <div className='image'>
                <p>Michael Caine</p>
                <p>CEO</p>
               </div>
               <div className='image'>
               <p>Michail Smitte</p>
               <p>Mentor</p>
               </div>
               <div className='image'>
               <p>Jennifer Epic</p>
               <p>CEO</p>
               </div>
               <div className='image'>
               <p> Patrick Stewart</p>
               <p>CEO</p>
               </div>
               <div className='image'>
               <p>Ralph Fiennes</p>
               <p>Mentor</p>
               </div>
               <div className='image'>
               <p>Tom Hiddleston</p>
               <p>Mentor</p>
               </div>
               <div className='image'>
               <p>Emma Watson</p>
               <p>Mentor</p>
               </div>
               <div className='image'>
               <p>Daniel Craig</p>
               <p>Mentor</p>
               </div>
               <div className='image'>
               <p>Tom Hardy</p>
               <p>Mentor</p>
               </div>
            </div>
        
        </div></NavLink>
    </Main_carusel>
  )
}

export default CaruselComponent;