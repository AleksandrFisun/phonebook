import { configureStore } from '@reduxjs/toolkit';
import contactSlice from 'redux/features/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
  },
});
