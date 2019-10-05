const cartReducer = (state = {
  listProduct: []
}, action) => {
  switch (action.type) {
      case "ADD_ITEM":
        state = {
          ...state,
          listProduct: [...state.listProduct, action.payload.product]
        };
        break;

      case "ADD_ITEM_QTY":
        state = {
          ...state,
          listProduct: state.listProduct.map(product => {
            console.log('listProduct', product)
            return product.id === action.payload.product.id
              ? {...product, qty: product.qty + 1 }
              : product
            })
          }
        break;

      case "REMOVE_ITEM_QTY":
        state = {
          ...state,
          listProduct: state.listProduct.map(product => {
            return product.id === action.payload.product.id
              ? {...product, qty: product.qty - 1 }
              : product
          })
        }
        break;

      case "REMOVE_ITEM":
        state = {
          ...state,
          listProduct: state.listProduct.filter(product => {
              return product.id !== action.payload.product.id;
          })
        }
        break;
      default:
          break;

  }
  return state;
};

export default cartReducer;