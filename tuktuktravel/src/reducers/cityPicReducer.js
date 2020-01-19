export  default  function (state  = {}, action) {
  switch (action.type) {
    case "SEND_CITY_PIC":
      return { ...state, cityPic: action.cityPic};
    default:
      return  state;
  }}