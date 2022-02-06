import React from 'react';
import Img from '../../../assets/images/login-bg.jpg';
import './upload.scss'

const Upload = () => {
    return (
        <div className='upload'>
            <img src={Img} className='image-preview' />
            <input type="file" />
        </div>
    );
};

export default Upload;
