import React from 'react';
import './register.scss';
import RegisterBg from '../../../assets/images/register-bg.jpg';
import Input from '../../../components/atoms/input';
import Button from '../../../components/atoms/button';
import Gap from '../../../components/atoms/gap';
import Link from '../../../components/atoms/link';



const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={RegisterBg} className='bg-image' alt='image'/>
      </div>
      <div className='right'>
        <p>Register</p>
        <Input label='Full Name' placeholder="fullname"/>
        <Gap height={10}/>
        <Input label='Email' placeholder="email" type="email"/>
        <Gap height={10}/>
        <Input label='Password' placeholder="password" type="password"/>
        <Gap height={20}/>
        <Button title='Register'/>
        <Gap height={20}/>
        <Link title='Kembali Ke Login'/>
      </div>
    </div>
  )
};

export default Register;
