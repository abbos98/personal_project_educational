import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { teamMember } from '../../mock/teamDate';
import { Container_wrapper, Wrapper_team } from "./teamMemberStyle";
import { Link } from 'react-router-dom';


const Team_Component = () => {
const data = teamMember.detail;
console.log(data);  
console.log(teamMember);

  return (
    <Wrapper_team>
      <div className='main_wrapper'>
       {data.map((value,index) => {
        return(
          <div key={index}>
            <Link to={`/teamdetail/${value.id}`}>
            <Container_wrapper>
              <div className='image_wrapper'><img className='image_style' src={value.person.img}/></div>
               
               <div className='text_wrapper'>
                   <p className='head_text'>{value.person.name}</p>
                   <p className='tab_text'>{value.person.position}</p>
                   <div className='SnsWrapper'>
                     <div className='round'><YouTubeIcon className='youtube_style'/></div>
                     <div className='round'><TelegramIcon className='telegram_style' /></div>
                     <div className='round'><InstagramIcon className='instagram'/></div>
                   </div>
               </div>
             
            </Container_wrapper>
  </Link>
        </div>
        )
       })} 
        </div>
    </Wrapper_team>
  )
}

export default Team_Component;