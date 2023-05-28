import React from 'react';
import { useSelector } from 'react-redux';
import { useGetPhoneBookQuery } from 'redux/services/contactsSlice';
import ItemContact from 'components/Phonebook/itemContact/itemContact';
import SpinnerBig from 'Loader/Spinner';
import {
  ListContactWrapper,
  List,
  Title,
  SpinnerWrapper,
} from './ListContact.styled';

export const ListContact = () => {
  const { data, isFetching } = useGetPhoneBookQuery();
  const onFilter = useSelector(state => state.phoneBookFilter.filter);
  const filteredContacts = data
    ? data.filter(contact =>
        contact.name ? contact.name.toLowerCase().includes(onFilter) : data
      )
    : data;

  return (
    <ListContactWrapper>
      <Title>
        <span>List Contacts</span>
        <SpinnerWrapper>{isFetching && <SpinnerBig />}</SpinnerWrapper>
      </Title>
      <List>
        {filteredContacts &&
          filteredContacts.map(({ id, name, phoneNumber }) => {
            return (
              <ItemContact key={id} id={id} name={name} number={phoneNumber} />
            );
          })}
      </List>
    </ListContactWrapper>
  );
};
