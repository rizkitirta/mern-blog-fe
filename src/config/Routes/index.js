import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from '../../pages/auth/login';
import Register from '../../pages/auth/register';
import MainApp from '../../pages/mainApp';
import About from '../../pages/web/about';
import Home from '../../pages/web/home';

const Routers = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainApp children={<Home/>}/>} />
            <Route path="/about" element={<MainApp children={<About/>}/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Routers;
