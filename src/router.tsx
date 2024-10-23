import { Route, Routes, useLocation } from 'react-router-dom';
import MainPageComponent from './mainPage';
import About_Us_Component from './AboutUs';
import Login_Component from './auth/login/login';
import Servises_main from './Servises';
import Servise_detail from './Servises/servise_detail';
import Project_component from './Projectt';
import Project_Detail_Component from './Projectt/project_detail';
import NavbarComponent from './context/navbar/navbar';
import Not_found_Component from './NotFound-404';
import Register_Component from './auth/register';
import Blog_Component from './Blog';


const RouterComponent = () => {
const location = useLocation();
const navbarComponent = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
    {!navbarComponent && <NavbarComponent />}
    <Routes>
      <Route path = {"*"} element = {<Not_found_Component />} />
      <Route path = {"/"} element = {<MainPageComponent />} />
      <Route path = {"/aboutus"} element = {<About_Us_Component />} />
      <Route path = {"/servises"} element = {<Servises_main />} />
      <Route path = {"/project"} element = {< Project_component />} />
      <Route path = {"/login"} element = {<Login_Component />} />
      <Route path = {"/readmore"} element = {<Servise_detail />} />
      <Route path = {"/projectDetail"} element = {< Project_Detail_Component />} />
      <Route path = {"/register"} element = {<Register_Component />} />
      <Route path = {"/blog"} element = {<Blog_Component />} />
     
    </Routes>
    </>
  )
}

export default RouterComponent;