import Axios from 'axios';

export const setDataPost = (page) => {
    return (dispatch) => {
        Axios.get(`http://localhost:3001/v1/get-post?page=${page}&perPage=2`)
            .then(res => {
                const response = res.data
                console.log(response)
                dispatch({ type: 'SET_POST', payload: response.data }) /**Update Global State */
                dispatch({
                    type: 'UPDATE_PAGE',
                    payload: {
                        currentPage: response.curent_page,
                        totalPage: response.total_page
                    }
                })
            })
            .catch(err => { 
                console.log(err)
            })
    }
}