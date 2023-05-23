import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContacts,
} from 'redux/actions/contactsActions';

const onAddContact = (state, { type, payload }) => [...state, payload];
const onDeleteContact = (state, { type, payload }) =>
  state.filter(item => item.id !== payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [deleteContact]: onDeleteContact,
});

const filter = createReducer('', {
  [filterContacts]: (state, { type, payload }) => payload,
});

export default combineReducers({ items, filter });
