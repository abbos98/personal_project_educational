import { Route, Routes } from 'react-router-dom';
import MainPageComponent from './mainPage';
import About_Us_Component from './AboutUs';


const RouterComponent = () => {
  return (
    <Routes>
      <Route path = {"/"} element = {<MainPageComponent />} />
      <Route path = {"/aboutus"} element = {<About_Us_Component />} />

   
    </Routes>
  )
}

export default RouterComponent;