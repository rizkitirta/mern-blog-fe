import React from 'react';
import { useNavigate } from 'react-router';
import loginImg from '../../../assets/images/login-bg.jpg';
import Gap from '../../atoms/gap';
import Link from '../../atoms/link';
import './blog.scss';

const BlogItem = (props) => {
  const navigate = useNavigate()
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={props.image} onClick={() => navigate(`/detail-post/${props._id}`)} />
        <div className='content-detail' onClick={() => navigate(`/detail-post/${props._id}`)}>
            <p className='title'>{props.title}</p>
            <p className='author'>{props.author} | {props.date}</p>
            <p className='body'>{props.content.substring(0,100)}</p>
        </div>
        <div className='actions'>
          <Link title="edit" onClick={() => navigate(`/edit-blog/${props._id}`)}></Link>
          <Gap width={10}/>
          <Link title="delete" onClick={() => props.delete(props._id)}></Link>
        </div>
    </div>
  );
};

export default BlogItem;
