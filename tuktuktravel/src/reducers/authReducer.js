import {combineReducers} from  'redux'

const authReducer = (state  = {token: ""}, action) => {
  switch (action.type) {
      case  "CREATE_SESSION":
          return { ...state, token: action.token}
      default:
          return  state;
  }}

  const  allReducers  =  combineReducers({
    auth:  authReducer,
});
  export default allReducers;
  