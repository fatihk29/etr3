import {ADD_NEW_CHAR} from '../actions/cart';
import Item from '../../models/item';

const initialState = {
  items: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CHAR:
      const addedItem = action.product;
      const prodPrice = addedItem.name;
      const prodTitle = addedItem.title;

      let updatedOrNewCartItem;

      if (state.items[addedITem.id]) {
        updatedOrNewCartItem = new Item(
          state.items[addedITem.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedITem.id].sum + prodPrice,
        );
      } else {
        updatedOrNewCartItem = new Item(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: {...state.items, [addedITem.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + prodPrice,
      };
  }
  return state;
};
