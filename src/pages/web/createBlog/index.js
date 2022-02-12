import React, { useState } from 'react';
import Button from '../../../components/atoms/button';
import Gap from '../../../components/atoms/gap';
import Input from '../../../components/atoms/input';
import TextArea from '../../../components/atoms/textarea';
import Upload from '../../../components/atoms/upload';
import './createBlog.scss';
import {useNavigate} from 'react-router-dom';
import Link from '../../../components/atoms/link';
import  Axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState('')  
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log(title)
    console.log(content)
    console.log(image)

    const data = new FormData()
    data.append('title',title)
    data.append('content',content)
    data.append('image',image)

    Axios.post('http://localhost:3001/v1/create-blog',data,{
      headers: {
        'content-type': 'multipart/form-data' 
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onUpload = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }
  return (
      <div className='blog-post'>
          <Link title="back" onClick={() => navigate('/')}/>
          <p className='title'>Create Blog</p>
          <Input label='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <Upload onChange={(e) => onUpload(e)} img={imagePreview}/>
          <TextArea value={content} onChange={(e) => setContent(e.target.value)}/>
          <Gap height={20}/>
          <div className='btn-action'>
            <Button title='Save' onClick={onSubmit}/>
          </div>
      </div>
  );
};

export default CreateBlog;
