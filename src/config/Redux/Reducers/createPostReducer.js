const initiateCreateState = {
    form: {
        title: '',
        content: '',
        image: ''
    },
    imagePreview: null
}

const createPostReducer = (state = initiateCreateState, action) => {
    if (action.type == 'SET_FORM_DATA') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }

    if (action.type == 'SET_IMG_PREVIEW') {
        return {
            ...state,
            imagePreview: action.payload
        }
    }

    return state;
}

export default createPostReducer;