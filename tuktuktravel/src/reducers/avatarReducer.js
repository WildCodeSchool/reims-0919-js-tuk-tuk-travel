export  default  function (state  = {}, action) {
  switch (action.type) {
      case  "AVATAR":
          return { ...state, avatar: action.avatar}
      default:
          return  state;
  }}