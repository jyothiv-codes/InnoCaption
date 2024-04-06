// reducers.js
const initialState = {
  cartItems: [] // array of objects { productId, quantity }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add item to cart
      return {
        ...state,
        cartItems: [...state.cartItems, { productId: action.productId, quantity: 1 }]
      };
    case 'REMOVE_FROM_CART':
      // Remove item from cart
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.productId)
      };
    case 'UPDATE_QUANTITY':
      // Update item quantity in cart
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.productId === action.productId ? { ...item, quantity: action.quantity } : item
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
