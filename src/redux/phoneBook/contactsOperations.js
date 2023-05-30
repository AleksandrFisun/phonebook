import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getAllContacts = createAsyncThunk(
  'contacts/get-contact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts', credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const createNewContact = createAsyncThunk(
  'contacts/create-contact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const updateContact = createAsyncThunk(
  'contacts/update-contact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/contacts/', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const deleteContact = createAsyncThunk(
  'contacts/delete-contact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${credentials}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const contactsOperations = {
  getAllContacts,
  createNewContact,
  updateContact,
  deleteContact,
};
export default contactsOperations;
