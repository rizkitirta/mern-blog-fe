import React from 'react';
import Button from '../../../components/atoms/button';
import BlogItem from '../../../components/molecules/blogItem';
import './home.scss'
import Gap from '../../../components/atoms/gap';
;


function Home() {
    return (
        <div className='home-page-wrapper'>
            <div className='create-wrapper'>
                <Button title="create blog"/>
            </div>
            <Gap height={20}/>
            <div className='content-wrapper'>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
            <div className='content-paginate'>
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    );
}

export default Home;
