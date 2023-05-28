import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi, phoneBookFilter } from 'Redux/services/contactsSlice';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    phoneBookFilter: phoneBookFilter.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
setupListeners(store.dispatch);
