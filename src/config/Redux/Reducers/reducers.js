import { combineReducers } from "redux";
import globalReducer from './globalReducer'
import homeReducer from './homeReducer'
import createPostReducer from './createPostReducer'
import detailReducer from './detailReducer'

const reducer = combineReducers({
    homeReducer,
    globalReducer,
    createPostReducer,
    detailReducer,
})

export default reducer;