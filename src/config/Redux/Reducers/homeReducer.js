const initialHomeState = {
    dataPost: []
}   

const homeReducer = (state = initialHomeState,action) => {
    if(action.type == 'SET_POST'){
        return {
            ...state,
            dataPost: action.payload
        }
    }

    return state;
}

export default homeReducer;