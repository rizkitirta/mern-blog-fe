import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Gap from '../../../components/atoms/gap';
import Link from '../../../components/atoms/link';
import './detailPost.scss';
import { setDetailPost } from '../../../config/Redux/Actions/detailAction';
import { useDispatch, useSelector } from 'react-redux';

const DetailPost = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { post } = useSelector(state => state.detailReducer)

  useEffect(() => {
    dispatch(setDetailPost(id))
  }, [])

  return (
    <div className='detail-post-wrapper' key={post.id}>
      <img className='img-cover' src={`http://localhost:3001/${post.image}`} />
      <p className='title'>{post.title}</p>
      <p className='author'>{post.author?.name}</p>
      <p className='content'>{post.content}</p>
      <Gap />
      <Link title='back' onClick={() => navigate('/')} />
    </div>
  );
};

export default DetailPost;
