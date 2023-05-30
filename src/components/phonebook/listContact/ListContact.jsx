import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/phoneBook/contactsOperations';
import ItemContact from 'components/phonebook/itemContact/itemContact';
import SpinnerBig from 'loader/Spinner';
import { useContacts } from 'hooks';
import {
  ListContactWrapper,
  List,
  Title,
  SpinnerWrapper,
} from './ListContact.styled';

export const ListContact = () => {
  const dispatch = useDispatch();
  const { item, isRefreshing, filter } = useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getAllContacts());
  }, [dispatch]);

  const filteredContacts = item?.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListContactWrapper>
      <Title>
        <span>List Contacts</span>
        <SpinnerWrapper>{isRefreshing && <SpinnerBig />}</SpinnerWrapper>
      </Title>
      <List>
        {filteredContacts &&
          filteredContacts.map(({ id, name, number }) => {
            return <ItemContact key={id} id={id} name={name} number={number} />;
          })}
      </List>
    </ListContactWrapper>
  );
};
