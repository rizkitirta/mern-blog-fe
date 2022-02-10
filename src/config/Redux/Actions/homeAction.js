import Axios from 'axios';

export const setDataPost = () => {
    return (dispatch) => {
        Axios.get('http://localhost:3001/v1/get-post')
        .then(res => {
            const response = res.data
            dispatch({type:'SET_POST',payload: response.data}) /**Update Global State */
        })
        .catch(err => {
            console.log(err)
        })
    }
}