import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'redux/features/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
