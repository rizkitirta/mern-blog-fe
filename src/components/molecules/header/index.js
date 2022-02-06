import React from 'react';
import './header.scss';

const Header = () => {
  return (
      <div className='header'>
        <p className='logo-app'>Mern Blog</p>
        <p className='menu-item'>Logout</p>
      </div>
  );
};

export default Header;
