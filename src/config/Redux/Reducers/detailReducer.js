const initiateState = {
    post: {}
}

const detailReducer = (state = initiateState, action) => {
    if (action.type == 'SET_DETAIL_POST') {
        return {
            ...state,
            post: action.payload
        }
    }

    return state;
}

export default detailReducer;