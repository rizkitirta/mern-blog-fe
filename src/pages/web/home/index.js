import React, { useEffect, useState } from 'react';
import Button from '../../../components/atoms/button';
import BlogItem from '../../../components/molecules/blogItem';
import './home.scss'
import Gap from '../../../components/atoms/gap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDataPost } from '../../../config/Redux/Actions';

function Home() {
    const { dataPost, author } = useSelector(state => state.homeReducer) /**Call Global State With Spesific Reducer */
    const globalState = useSelector(state => state) /**Call Global State With All Reducer */
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDataPost())
    }, [dispatch])

    const navigate = useNavigate();
    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="create blog" onClick={() => navigate('/create-blog')} />
            </div>
            <Gap height={20} />
            {author}
            <div className='content-wrapper'>
                {
                    dataPost.map(post => {
                        return (
                            <BlogItem
                                image={`http://localhost:3001/${post.image}`}
                                title={post.title} author={post.author.name}
                                date={post.createdAt}
                                content={post.content}
                                key={post._id} />
                        );
                    })
                }
            </div>
            <div className='content-paginate'>
                <Button title="Previous" />
                <Gap width={20} />
                <Button title="Next" />
            </div>
            <Gap height={20} />
        </div>
    );
}

export default Home;
