export const initialState = {
  // basket: [],
  user: null,
};

//SELECTOR
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){

      case "SET_USER":
          return{
              ...state,
              user: action.user,// This is going to be the user that we actually dispatched
          };
          default:
              return state;
  }
}
export default reducer;
