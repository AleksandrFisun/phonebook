import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  item: [],
  filter: '',
  getIsFetchAnswer: false,
};
const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [contactsOperations.getAllContacts.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.item = action.payload;
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.getAllContacts.rejected](state) {
      state.getIsFetchAnswer = false;
    },
    //
    [contactsOperations.createNewContact.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.createNewContact.fulfilled](state, action) {
      state.item = [action.payload, ...state.item];
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.createNewContact.rejected](state, action) {
      state.getIsFetchAnswer = false;
    },
    //
    [contactsOperations.deleteContact.pending](state) {
      state.getIsFetchAnswer = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.item = state.item.filter(
        contact => contact.id !== action.payload.id
      );
      state.getIsFetchAnswer = false;
    },
    [contactsOperations.deleteContact.rejected](state, action) {
      state.getIsFetchAnswer = false;
    },
  },
});
export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
