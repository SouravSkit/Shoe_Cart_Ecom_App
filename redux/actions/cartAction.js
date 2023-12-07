export const addToCart = (productId, price) => {
  return {
    type: "ADDTOCART",
    payload: {
      productId,
    },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVEFROMCART",
    payload: {
      productId,
    },
  };
};