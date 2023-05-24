import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
  filter: '',
};
const itemSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
const persistConfig = {
  key: 'phoneBookStore',
  storage,
  whitelist: ['items'],
};
export const phoneBookReducer = persistReducer(
  persistConfig,
  itemSlice.reducer
);
export const { addContact, deleteContact, filterContacts } = itemSlice.actions;
export const getPhoneBookItems = state => state.phonebook.items;
export const getPhoneBookFilter = state => state.phonebook.filter;
