import { Wrapper_team } from './Style';
import line_yellow from "../../assets/yellow_line.png";
import "../../AboutUs/Our_Best_Team/bestTeamStyle.css";

const Our_team_Component = () => {
  return (
    <Wrapper_team>

        <div className='wrapper_texts'>
           <img src={line_yellow} alt='icon'/>
           <p className='noteworthy_style'>Our Best Team</p>
          </div>

          <div className='team_wrapper'>
              <div className='first_best'></div>
          </div>
       
    </Wrapper_team>
  )
}

export default Our_team_Component