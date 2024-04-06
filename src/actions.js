// actions.js
export const addToCart = (productId) => ({
  type: 'ADD_TO_CART',
  productId
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  productId
});

export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  productId,
  quantity
});
