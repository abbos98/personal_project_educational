import { Wrapper_about } from './aboutUsStyle';
import '../AboutUs/Aboutadd.css';
import Illuminate_component from './Illuminate_1';
import Grow_Smarter_Component from './Grow_Smarter_2';
import Enhance_component from './Enhance_Your';
import Our_team_Component from './Our_Best_Team';
import Work_witch_us_Component from './work_with_us';


const About_Us_Component = () => {
  return (
    <Wrapper_about>
      <div className='main_photo'>
        <p className='About_us'>About Us</p>
        <p className='home_aboutUs'>Home / About Us</p>
      </div>

    <Illuminate_component />
    <Grow_Smarter_Component />
    <Enhance_component />
    <Our_team_Component />
    <Work_witch_us_Component />


    
    </Wrapper_about>
  )
}

export default About_Us_Component;