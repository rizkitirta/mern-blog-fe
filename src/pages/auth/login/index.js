import React from 'react';
import LoginBg from '../../../assets/images/login-bg.jpg';
import Input from '../../../components/atoms/input';
import Button from '../../../components/atoms/button';
import Gap from '../../../components/atoms/gap';
import Link from '../../../components/atoms/link';

const Login = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={LoginBg} className='bg-image' alt='image'/>
      </div>
      <div className='right'>
        <p>Login</p>
        <Input label='Email' placeholder="email" type="email"/>
        <Gap height={10}/>
        <Input label='Password' placeholder="password" type="password"/>
        <Gap height={20}/>
        <Button title='Login'/>
        <Gap height={20}/>
        <Link title='Kembali Ke Register'/>
      </div>
    </div>
  )
};

export default Login;

