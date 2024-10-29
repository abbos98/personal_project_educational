import { Wrapper_main_style } from "./mainPageStyle";
import './mainPage.css';
import Inovation_digital_component from "./Inovation_Digital_1";
import IlluminateCompanent from "./illuminate_2";
import OurServisesComponents from "./OurServises_3";
import NoteWorth_component from "./Noteworth_fea_4";
import Lates_galleryComponent from "./latest_gallery_6";
import Pricing_planeComponent from "./Pricing_plane_8";
import Resent_updatesComponent from "./Resent_updates_9";
import CaruselComponent from "./Our_Team_7";
import Get_in_TouchComponent from "./Get_in_touch_11";
import TstComponent from "./A_digital_10";
import Footer from "../context/footbar/footer";
import Our_team_Component from "../AboutUs/Our_Best_Team";


const MainPageComponent = () => {
  return (
    <Wrapper_main_style>
     
  <Inovation_digital_component />  
  <IlluminateCompanent />
  <OurServisesComponents />
  <NoteWorth_component />
  <Lates_galleryComponent /> 
  <CaruselComponent />
  <Pricing_planeComponent />
  <Resent_updatesComponent />
  <TstComponent />
  <Get_in_TouchComponent />

  <Footer />
  

   </Wrapper_main_style>


    
  )
}

export default MainPageComponent;