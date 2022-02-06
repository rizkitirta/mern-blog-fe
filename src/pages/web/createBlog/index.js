import React from 'react';
import Button from '../../../components/atoms/button';
import Gap from '../../../components/atoms/gap';
import Input from '../../../components/atoms/input';
import TextArea from '../../../components/atoms/textarea';
import Upload from '../../../components/atoms/upload';
import './createBlog.scss';

const CreateBlog = () => {
  return (
      <div className='blog-post'>
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
