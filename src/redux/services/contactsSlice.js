import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookFilter = createSlice({
  name: 'posts',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});
export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://646f21d209ff19b12086a580.mockapi.io/api/book',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getPhoneBook: builder.query({
      query: () => `/contact`,
      providesTags: ['Contact'],
    }),
    deletePhoneBook: builder.mutation({
      query: contactId => ({
        url: `/contact/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addPhoneBook: builder.mutation({
      query: ({ name, phoneNumber }) => ({
        url: `/contact`,
        method: 'POST',
        body: {
          name: name,
          phoneNumber: phoneNumber,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { filterContacts } = phoneBookFilter.actions;
export const {
  useGetPhoneBookQuery,
  useAddPhoneBookMutation,
  useDeletePhoneBookMutation,
} = phoneBookApi;
