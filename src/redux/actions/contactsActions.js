import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('@phonebook/addContact');
const deleteContact = createAction('@phonebook/deleteContact');
const filterContacts = createAction('@phonebook/filterContacts');

export { addContact, deleteContact, filterContacts };
