import React, { useEffect, useState } from 'react';
import Button from '../../../components/atoms/button';
import BlogItem from '../../../components/molecules/blogItem';
import './home.scss'
import Gap from '../../../components/atoms/gap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, setDataPost } from '../../../config/Redux/Actions';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function Home() {
    const { dataPost, author, page } = useSelector(state => state.homeReducer) /**Call Global State With Spesific Reducer */
    const globalState = useSelector(state => state) /**Call Global State With All Reducer */
    const [counter, setcounter] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setDataPost(counter))
    }, [dispatch, counter])

    const previous = () => {
        setcounter(counter <= 1 ? 1 : counter - 1)
    }
    const next = () => {
        setcounter(counter == page.totalPage ? page.totalPage : counter + 1)
        console.log(counter)
    }

    const deleteConfirm = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        deletePost(id)
                        dispatch(setDataPost(counter))
                    }
                },
                {
                    label: 'No',
                    onClick: () => console.log('canceled')
                }
            ]
        });
    }

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
                                key={post._id}
                                _id={post._id}
                                delete={deleteConfirm} />
                        );
                    })
                }
            </div>

            <Gap height={20} />
            <div className='text-page'>{counter} / {page.totalPage}</div>
            <Gap height={10} />

            <div className='content-paginate'>
                <Button title="Previous" onClick={previous} />
                <Gap width={20} />
                <Button title="Next" onClick={next} />
            </div>
            <Gap height={20} />
        </div>
    );
}

export default Home;
