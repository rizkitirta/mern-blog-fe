import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Img from '../../../assets/images/login-bg.jpg';
import Gap from '../../../components/atoms/gap';
import Link from '../../../components/atoms/link';
import './detailPost.scss';
import Axios from 'axios';

const DetailPost = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/v1/get-post/${id}`)
      .then(res => {
        const response = res.data;
        setPost(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='detail-post-wrapper' key={post.id}>
      <img className='img-cover' src={`http://localhost:3001/${post.image}`} />
      <p className='title'>{post.title}</p>
        <p className='author'>{post.author?.name}</p>
        <p className='content'>Lorem ipsum dolor sit amet</p>
      <Gap />
      <Link title='back' onClick={() => navigate('/')} />
    </div>
  );
};

export default DetailPost;
