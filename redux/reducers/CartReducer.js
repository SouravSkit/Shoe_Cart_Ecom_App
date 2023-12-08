import { getProduct } from '../../utils/cartOperations'; 

const initialState = {
    items: [],
    addCartSuccess: false,
    addCartFail: false,
    removeCartSuccess: false,
    removeCartFail: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTOCART':
            const product = getProduct(action.payload);
            const existingItem = state.items.find((item) => item.id === action.payload);

            if (!existingItem) {
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            id: action.payload,
                            qty: 1,
                            product,
                            totalPrice: product.price,
                        },
                    ],
                };
            } else {
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload
                            ? {
                                  ...item,
                                  qty: item.qty + 1,
                                  totalPrice: item.totalPrice + product.price,
                              }
                            : item
                    ),
                };
            }

            case "REMOVEFROMCART":
              console.log("Removing product with ID:", action.payload.productId);
              return {
                ...state,
                items: [],
                removeCartSuccess: true,
              };
        default:
            return state;
    }
};

export default cartReducer;
