import React from 'react';
import Button from '../../../components/atoms/button';
import Gap from '../../../components/atoms/gap';
import Input from '../../../components/atoms/input';
import TextArea from '../../../components/atoms/textarea';
import Upload from '../../../components/atoms/upload';
import './createBlog.scss';
import {useNavigate} from 'react-router-dom';
import Link from '../../../components/atoms/link';

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
      <div className='blog-post'>
          <Link title="back" onClick={() => navigate('/')}/>
          <p className='title'>Create Blog</p>
          <Input label='Title'/>
          <Upload/>
          <TextArea/>
          <Gap height={20}/>
          <div className='btn-action'>
            <Button title='Save'/>
          </div>
      </div>
  );
};

export default CreateBlog;
