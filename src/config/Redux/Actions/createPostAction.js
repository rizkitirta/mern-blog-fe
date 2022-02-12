import axios from "axios"

export const setForm = (formType, formValue) => {
    return { type: 'SET_FORM_DATA', formType, formValue }
}

export const setImagePreview = (payload) => {
    return { type: 'SET_IMG_PREVIEW', payload }
}

export const postToAPi = (form) => {
    const data = new FormData()
    data.append('title', form.title)
    data.append('content', form.content)
    data.append('image', form.image)

    axios.post('http://localhost:3001/v1/create-blog', data, {
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

export const updateToAPi = (form,id) => {
    const data = new FormData()
    data.append('title', form.title)
    data.append('content', form.content)
    data.append('image', form.image)

    axios.put(`http://localhost:3001/v1/update-blog/${id}`, data, {
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