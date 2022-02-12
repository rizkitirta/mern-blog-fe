import React from 'react';
import Img from '../../../assets/images/login-bg.jpg';
import './upload.scss'

const Upload = ({img,...rest}) => {
    return (
        <div className='upload'>
            {img && <img src={img} className='image-preview' />}
            <input type="file" {...rest}/>
        </div>
    );
};

export default Upload;
