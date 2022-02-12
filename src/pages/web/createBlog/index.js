import React, { useEffect, useState } from 'react';
import Button from '../../../components/atoms/button';
import Gap from '../../../components/atoms/gap';
import Input from '../../../components/atoms/input';
import TextArea from '../../../components/atoms/textarea';
import Upload from '../../../components/atoms/upload';
import './createBlog.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Link from '../../../components/atoms/link';
import { useSelector, useDispatch } from 'react-redux';
import { postToAPi, setForm, setImagePreview, updateToAPi } from '../../../config/Redux/Actions/createPostAction';
import axios from 'axios';

const CreateBlog = () => {
  const { form, imagePreview } = useSelector(state => state.createPostReducer)
  const dispatch = useDispatch()
  const { title, content } = form;
  const navigate = useNavigate();
  const { id } = useParams()
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    dispatch(setForm('title', ''))
    dispatch(setForm('content', ''))
    dispatch(setForm('image', ''))

    if (id) {
      axios.get(`http://localhost:3001/v1/get-post/${id}`)
        .then(res => {
          const response = res.data;
          dispatch(setForm('title', response.data.title))
          dispatch(setForm('content', response.data.content))
          dispatch(setForm('image', response.data.image))
        })
        .catch(err => {
          console.log(err)
        })

      setIsUpdate(true)
    }
  }, [])


  const onSubmit = () => {
    if (id) {
      updateToAPi(form, id)
    } else {
      postToAPi(form)
    }
  }

  const onUpload = (e) => {
    const file = e.target.files[0]
    dispatch(setForm('image', file))
    dispatch(setImagePreview(URL.createObjectURL(file)))
  }

  return (
    <div className='blog-post'>
      <Link title="back" onClick={() => navigate('/')} />
      <p className='title'>{isUpdate ? 'Update' : 'Create New'} Blog</p>
      <Input label='Title' value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload onChange={(e) => onUpload(e)} img={imagePreview} />
      <TextArea value={content} onChange={(e) => dispatch(setForm('content', e.target.value))} />
      <Gap height={20} />
      <div className='btn-action'>
        <Button title={isUpdate ? 'Update' : 'Save'} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
