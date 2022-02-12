import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Login from '../../pages/auth/login';
import Register from '../../pages/auth/register';
import MainApp from '../../pages/mainApp';
import About from '../../pages/web/about';
import CreateBlog from '../../pages/web/createBlog';
import DetailPost from '../../pages/web/detailPost';
import Home from '../../pages/web/home';

const Routers = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainApp children={<Home/>}/>} />
            <Route path="/about" element={<MainApp children={<About/>}/>} />
            <Route path="/create-blog" element={<MainApp children={<CreateBlog/>}/>} />
            <Route path="/edit-blog/:id" element={<MainApp children={<CreateBlog/>}/>} />
            <Route path="/detail-post/:id" element={<MainApp children={<DetailPost/>}/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default Routers;
