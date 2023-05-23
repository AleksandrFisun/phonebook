import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, { payload: { name, number } }) {
      state.contacts = [
        ...state.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export default contactSlice;
