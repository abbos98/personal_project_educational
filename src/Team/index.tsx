import { Wrapper_main_team } from './TeamStyle';
import "../Team/teamStyle.css";
import Team_Component from './team_members_1';
import Work_witch_us_Component from '../AboutUs/work_with_us';

const TeamComponent = () => {
  return (
    <Wrapper_main_team>
       <div className='mainWrapperTop'>
         <p className='team_style'>Team</p>
         <p className='text_tab'>Home / Team</p>
       </div>



    <Team_Component />

    <Work_witch_us_Component />

    </Wrapper_main_team>
  )
}

export default TeamComponent;