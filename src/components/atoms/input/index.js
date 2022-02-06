import React from 'react';
import './input.scss';

const Input = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <label className='label'>{label}</label>
        <input className='input' {...rest}/>
    </div>
  );
};

export default Input;
