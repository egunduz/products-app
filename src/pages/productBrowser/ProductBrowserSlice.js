import { createSlice, createSelector, createAsyncThunk, } from '@reduxjs/toolkit';

const initialState = {
  pageIndex: 0,
  totalPages: 0,
  fetchedItems: [],
  filters: {
    types: [],
    tags: [],
    brands: [],
  },
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic.

export const fetchAsync = createAsyncThunk(
  'product/fetch',
  async (amount) => {
    const filter = { page: pageIndex, limit: 16}
    productApi.getProducts(filter).then(res =>{
      const total = res.headers.get('X-Total-Count');
      setTotalCount(new Number(total));
      setFetching(false);
      res.json().then(data=>{
        setProductList(data);
      })
      
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

/**
 * redux toolkit api for Product store
 */
const productSlice = createSlice({
  name: 'products',
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
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
      builder
        .addCase(fetchAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.value += action.payload;
        });
    },
  },
});

/** those actions will be exported */
const { addItem, removeItem, updateItem, } = productSlice.actions;

/** inorder to memoise items selection */
const selectProducts = (state) => state.products.fetchedItems;


// exporta actions
export {  };
// exporta selectors
export { selectProducts, };
// export reducer
export default productSlice.reducer;
