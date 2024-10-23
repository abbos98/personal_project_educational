import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './router';

// import MainPageComponent from './mainPage';
// import { Wrapper_footbar } from './context/footbar/footbarStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
 
    <RouterComponent />

  </BrowserRouter>
);

