import React from 'react';
import { ListContactWrapper, List } from './ListContact.styled';
import { useSelector } from 'react-redux';
import ItemContact from 'components/phonebook/itemContact/itemContact';

export const ListContact = () => {
  const contacts = useSelector(state => state.phonebook.items);
  const filter = useSelector(state => state.phonebook.filter.toLowerCase());
  const filteredContacts = contacts.filter(contact =>
    contact.name ? contact.name.toLowerCase().includes(filter) : contacts
  );

  return (
    <ListContactWrapper>
      <h2>List Contacts</h2>
      {contacts.length <= 0 && <p>No contacts</p>}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <List key={id}>
              <ItemContact id={id} name={name} number={number} />
            </List>
          );
        })}
    </ListContactWrapper>
  );
};