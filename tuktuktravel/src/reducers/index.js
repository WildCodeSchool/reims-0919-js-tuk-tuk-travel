import {combineReducers} from  'redux'
import  authReducer  from  './authReducer'
import avatarReducer from './avatarReducer'

const  allReducers  =  combineReducers({
    auth:  authReducer,
    avatar: avatarReducer,
});
export  default  allReducers;