import React from 'react';
import { useNavigate } from 'react-router';
import Img from '../../../assets/images/login-bg.jpg';
import Gap from '../../../components/atoms/gap';
import Link from '../../../components/atoms/link';
import './detailPost.scss';

const DetailPost = () => {
    const navigate = useNavigate()
  return (
    <div className='detail-post-wrapper'>
        <img className='img-cover' src={Img} />
        <p className='title'>Title</p>
        <p className='author'>Author</p>
        <p className='content'>Lorem ipsum dolor sit amet</p>
        <Gap/>
        <Link title='back' onClick={() => navigate('/')}/>
    </div>
  );
};

export default DetailPost;
