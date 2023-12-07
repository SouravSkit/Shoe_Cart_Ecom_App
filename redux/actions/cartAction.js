export const addToCart = (productId) => {
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