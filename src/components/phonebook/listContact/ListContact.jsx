import React from 'react';
import { ListContactWrapper, List } from './ListContact.styled';
import ItemContact from 'components/phonebook/itemContact/itemContact';
import { useSelector } from 'react-redux';

export const ListContact = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());
  const filteredContacts = contacts.filter(contact =>
    contact.name ? contact.name.toLowerCase().includes(filter) : contacts
  );

  return (
    <ListContactWrapper>
      <h2>List Contacts</h2>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <List key={id}>
            <ItemContact id={id} name={name} number={number} />
          </List>
        );
      })}
    </ListContactWrapper>
  );
};
