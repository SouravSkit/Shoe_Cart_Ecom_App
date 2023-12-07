
const initialState = {
    items: [],
    addCartSuccess: false,
    addCartFail: false,
    removeCartSuccess: false,
    removeCartFail: false,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADDTOCART":
        const existingItem = state.items.find(item => item.productId === action.payload.productId);
  
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.productId === action.payload.productId
                ? { ...item, qty: item.qty + 1, totalPrice: item.totalPrice + action.payload.price }
                : item
            ),
            addCartSuccess: true,
          };
        } else {
          return {
            ...state,
            items: [
              ...state.items,
              {
                productId: action.payload.productId,
                qty: 1,
                totalPrice: action.payload.price,
              },
            ],
            addCartSuccess: true,
          };
        }
  
      case "REMOVEFROMCART":
        return {
          ...state,
          items: state.items.filter(item => item.productId !== action.payload.productId),
          removeCartSuccess: true,
        };
    }
  
    return state; 
  };
  
  export default cartReducer;