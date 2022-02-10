import React from 'react';
import { useNavigate } from 'react-router';
import loginImg from '../../../assets/images/login-bg.jpg';
import Gap from '../../atoms/gap';
import Link from '../../atoms/link';
import './blog.scss';

const BlogItem = (props) => {
  const navigate = useNavigate()
  return (
    <div className='blog-item' onClick={() => navigate('/detail-post')}>
        <img className='image-thumb' src={props.image} />
        <div className='content-detail'>
            <p className='title'>{props.title}</p>
            <p className='author'>{props.author} | {props.date}</p>
            <p className='body'>{props.content}</p>
        </div>
    </div>
  );
};

export default BlogItem;
