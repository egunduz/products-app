import { createSlice, createSelector, } from '@reduxjs/toolkit';


const initialState = {
  items: [{ id: 1222, name: "afdssdfds", price: 100, quantity: 3 }], // shopping items
  status: 'idle',
};

/**
 * redux toolkit api for Basket store
 */
const basketSlice = createSlice({
  name: 'basket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action) => {
      // "Mutate" the existing state, no return value needed
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      // Construct a new result array immutably and return it
      const items = state.items.filter(item => item.id !== action.payload)
      return {
        ...state,
        items
      };
    },
    updateItem: (state, action) => {
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          // update the item
          return {
            ...action.payload
          }
        }

        return item;
      });
    },
  },
});

/** those actions will be exported */
const { addItem, removeItem, updateItem, } = basketSlice.actions;

/** inorder to memoise items selection */
const selectItems = (state) => state.basket.items;

/** calculates total prise of items in the basket */
const selectTotalPrice = createSelector(
  selectItems,
  items => {
    return items ? items.reduce((total, next) => total + ((next.quantity * next.price) || 0), 0) : 0;
  }
);

/** inorder to memoise the item selection */
const selectItemId = (state, itemId) => itemId;

const selectItemById = createSelector(
  [selectItems, selectItemId],
  (items, itemId) => items.find(item => item.id === itemId)
);

/**
 * incremenst quanitity/amount of a particular item
 * @param {*} itemId prpduct id
 */
const increment = (itemId) => (dispatch, getState) => {
  const item = selectItemById(getState(), itemId);
  if (item !== undefined) {
    const newItem = {
      ...item,
      quantity: item.quantity + 1,
    }
    dispatch(updateItem(newItem));
  }
};

/**
 * decrements quanitity of a particular item
 * @param {*} itemId prpduct id
 */
const decrement = (itemId) => (dispatch, getState) => {
  const item = selectItemById(getState(), itemId);
  if (item !== undefined) {
    const newItem = {
      ...item,
      quantity: Math.max(0, item.quantity - 1),
    }
    // update quantity
    dispatch(updateItem(newItem));
    // if quantity iz zero, remove item from the basket
    if (newItem.quantity === 0){
        setTimeout(() => dispatch(removeItem(newItem.id)), 500)
    } 
  }
};

/**
 * if itme doesnot exists in the basket, insert the new item,
 * else increase amound of item by 1
 * @param {*} item to be added
 */
const addItemToBasket = (item) => (dispatch, getState) => {
  const itemId = item.added;
  const existingItem = selectItemById(getState(), itemId);
  if (existingItem === undefined) {
    const newItem = {...item, id: itemId, quantity: 1, };
    dispatch(addItem(newItem));
  }
  else
    dispatch(increment(existingItem.id));
};

// exporta actions
export { addItem, removeItem, updateItem, increment, decrement, addItemToBasket, };
// exporta selectors
export { selectItems, selectTotalPrice, };
// export reducer
export default basketSlice.reducer;
