import { addToCart, removeFromCart } from '../actions/cartAction';

const initialState = {
    items: [],
    // other cart-related state...
  };
  
  const cartReducer = (state = initialState, action) => {
    console.log("Action:", action);

    switch (action.type) {
      case "ADDTOCART":
        // Handle the addToCart action
        // Return a new state object with the updated cart information
        // Make sure to handle immutability correctly, e.g., using spread operators
        return {
          ...state,
          items: [...state.items, /* updated cart item */],
        };
  
      case "REMOVEFROMCART":
        // Handle the removeFromCart action
        // Return a new state object with the updated cart information
        // Make sure to handle immutability correctly, e.g., using filter
        return {
          ...state,
          items: state.items.filter(/* condition to remove item */),
        };
  
      // other cases...
  
      default:
        return state;
    }
  };
  
  export default cartReducer;