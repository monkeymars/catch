export const addCart = (product) => {
  return {
    type: "ADD_ITEM",
    payload: {
        price: product.salePrice,
        product: product
    }
  }
}

export const removeCart = (product, index) => {
  return {
      type: "REMOVE_ITEM",
      payload: {
          index: index,
          price: product.price,
          product: product
      }
  }
}