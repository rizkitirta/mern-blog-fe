const initialHomeState = {
    dataPost: [],
    page: {
        currentPage: 1,
        totalPage: 1
    }
}   

const homeReducer = (state = initialHomeState,action) => {
    if(action.type == 'SET_POST'){
        return {
            ...state,
            dataPost: action.payload
        }
    }
    if(action.type == 'UPDATE_PAGE'){
        return {
            ...state,
            page: action.payload
        }
    }

    return state;
}

export default homeReducer;