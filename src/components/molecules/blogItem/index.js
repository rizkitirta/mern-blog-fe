import React from 'react';
import loginImg from '../../../assets/images/login-bg.jpg';
import './blog.scss';

const BlogItem = (props) => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={loginImg} />
        <div className='content-detail'>
            <p className='title'>Title</p>
            <p className='author'>Author - Date Post</p>
            <p className='body'>lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  );
};

export default BlogItem;
