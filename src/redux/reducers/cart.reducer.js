const cartReducer = (state = {
  totals: 0,
  listProduct: []
}, action) => {
  console.log(action)
  switch (action.type) {
      case "ADD_ITEM":
          state = {
              ...state,
              totals: state.totals + action.payload.price,
              listProduct: [...state.listProduct, action.payload.product]
          };
          break;

      case "REMOVE_ITEM":
          state = {
              ...state,
              totals: state.totals - action.payload.price,
              listProduct: state.listProduct.filter((item, idx) => {
                  return idx !== action.payload.index;
              })
          }
          break;
      default:
          break;

  }
  return state;
};

export default cartReducer;