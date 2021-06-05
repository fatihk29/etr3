import {ADD_NEW_CHAR} from '../actions/makeItem';
import Item from '../../models/item';

const initialState = {
  items: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CHAR:
      const addedItem = action.product;
      const prodID = addedItem.id;
      const prodName = addedItem.name;
      const prodJob = addedItem.job;
      const prodAvatar = addedItem.avatar;
      const prodLink = addedItem.link;

      let updatedOrNewItem;

      if (state.items[addedItem.id]) {
        updatedOrNewItem = new Item(
          state.items[addedItem.id].quantity + 1,
          prodName,
          prodJob,
          prodAvatar,
          prodLink,
          state.items[addedItem.id],
        );
      } else {
        updatedOrNewItem = new Item(
          prodID,
          prodName,
          prodJob,
          prodAvatar,
          prodLink,
        );
      }
      return {
        ...state,
        items: {...state.items, [addedItem.id]: updatedOrNewItem},
      };
  }
  return state;
};
