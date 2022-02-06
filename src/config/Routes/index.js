import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import About from '../../pages/web/about';
import Login from '../../pages/auth/login/index';
import Register from '../../pages/auth/register';
import Home from '../../pages/web/home';

const Routers = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Routers;
