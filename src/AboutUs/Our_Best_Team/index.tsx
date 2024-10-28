import { Wrapper_team } from './Style';
import line_yellow from "../../assets/yellow_line.png";
import "../../AboutUs/Our_Best_Team/bestTeamStyle.css";
import { NavLink } from 'react-router-dom';

const Our_team_Component = () => {
  return (
    <Wrapper_team>

        <div className='wrapper_texts'>
           <img src={line_yellow} alt='icon'/>
           <p className='noteworthy_style'>Our Best Team</p>
          </div>

          <div className='team_wrapper'>
              <NavLink to={'/team'} style={{textDecoration:"none"}}><div className='first_best'>
                <p className='our_best_member'>Our best member</p>
              </div></NavLink>
              <NavLink to={'/team'} style={{textDecoration:"none"}}><div className='second_best'>
                <p className='our_best_member_two'>Our best member</p>
              </div></NavLink>
              <NavLink to={'/team'} style={{textDecoration:"none"}}><div className='third_best'>
                <p className='our_best_member'>Our best member</p>
              </div></NavLink>
          </div>
       
    </Wrapper_team>
  )
}

export default Our_team_Component