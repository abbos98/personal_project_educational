import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarComponent from './context/navbar/navbar';
import RouterComponent from './router';
// import MainPageComponent from './mainPage';
// import { Wrapper_footbar } from './context/footbar/footbarStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <NavbarComponent />
    <RouterComponent />

  </BrowserRouter>
);

