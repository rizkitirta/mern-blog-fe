import React from 'react';
import Img from '../../../assets/images/login-bg.jpg';
import './detailPost.scss';

const DetailPost = () => {
  return (
    <div className='detail-post-wrapper'>
        <img className='img-cover' src={Img} />
        <p className='title'>Title</p>
        <p className='author'>Author</p>
        <p className='content'>Lorem ipsum dolor sit amet</p>
    </div>
  );
};

export default DetailPost;
