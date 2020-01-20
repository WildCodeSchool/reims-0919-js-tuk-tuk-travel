export  default  function (state  = {}, action) {
  switch (action.type) {
      case  "SEND_AVATAR":
          return { ...state, avatar: action.avatar};
      default:
          return  state;
  }}