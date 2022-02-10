import React from 'react';
import { useNavigate } from 'react-router';
import './header.scss';

const Header = () => {
  const navigate = useNavigate()
  return (
      <div className='header'>
        <p className='logo-app'>Mern Blog</p>
        <p className='menu-item' onClick={() => navigate('login')}>Logout</p>
      </div>
  );
};

export default Header;
