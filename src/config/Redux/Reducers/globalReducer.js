const initialState = {
    author: "tirtadev"
}

const globalReducer = (state = initialState, action) => {
    if(action.type == 'SET_AUTHOR'){
        return {
            ...state,
            author: action.payload
        }
    }
    return state;
}

export default globalReducer;
