import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from '../web/home';
import About from '../web/about';
import Header from '../../components/molecules/header';
import Footer from '../../components/molecules/footer';
import './mainApp.scss';

const MainApp = (props) => {
  return (
      <div className='main-app-wrapper'>
            <div className='header-wrapper'>
                <Header/>
            </div>
            <div className='content-wrapper'>
                {props.children}
            </div>
            <div className='footer-wrapper'>
                <Footer/>
            </div>
      </div>
  );
};

export default MainApp;
