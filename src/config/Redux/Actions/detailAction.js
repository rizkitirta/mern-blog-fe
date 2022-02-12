import axios from "axios"

export const setDetailPost = (id) => (dispatch) => {
    axios.get(`http://localhost:3001/v1/get-post/${id}`)
        .then(res => {
            const response = res.data;
            dispatch({ type: 'SET_DETAIL_POST', payload: response.data })
        })
        .catch(err => {
            console.log(err)
        })
}