import React from 'react';
import {
  ListContactWrapper,
  List,
  Item,
  Span,
  ButtonDel,
} from './ListContact.styled';
import { deleteContact } from 'redux/features/contacts/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export const ListContact = () => {
  const selector = useSelector(state => state.contacts);
  const { contacts } = selector;
  const dispatch = useDispatch();

  return (
    <ListContactWrapper>
      <h2>List Contacts</h2>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <List key={id}>
            <Item>
              <Span>{name}</Span>
            </Item>
            <Item>
              <Span>{number}</Span>
            </Item>
            <Item>
              <div>
                <ButtonDel onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </ButtonDel>
              </div>
            </Item>
          </List>
        ))}
    </ListContactWrapper>
  );
};
