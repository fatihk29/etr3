export const ADD_NEW_CHAR = 'ADD_TO_CART';

export const addToBucket = product => {
  return {type: ADD_NEW_CHAR, product: product};
};
