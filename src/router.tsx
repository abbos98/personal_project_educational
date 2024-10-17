import { Route, Routes, useLocation } from 'react-router-dom';
import MainPageComponent from './mainPage';
import About_Us_Component from './AboutUs';
import Login_Component from './auth/login';
import Servises_main from './Servises';
import Servise_detail from './Servises/servise_detail';


const RouterComponent = () => {


  return (
    <>

    
    <Routes>
      <Route path = {"/"} element = {<MainPageComponent />} />
      <Route path = {"/aboutus"} element = {<About_Us_Component />} />
      <Route path = {"/servises"} element = {<Servises_main />} />
      <Route path = {"/login"} element = {<Login_Component />} />
      <Route path = {"/readmore"} element = {<Servise_detail />} />
      
      
    </Routes>
    </>
  )
}

export default RouterComponent;