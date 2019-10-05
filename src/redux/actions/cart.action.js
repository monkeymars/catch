export const addCart = (product) => {
  return {
    type: "ADD_ITEM",
    payload: {
        price: product.salePrice,
        product: product
    }
  }
}

export const addQty = (product) => {
  return {
    type: "ADD_ITEM_QTY",
    payload: {
      product: product
    }
  }
}

export const removeQty = (product) => {
  return {
    type: "REMOVE_ITEM_QTY",
    payload: {
      product: product
    }
  }
}

export const removeItem = (product) => {
  return {
      type: "REMOVE_ITEM",
      payload: {
          product: product
      }
  }
}