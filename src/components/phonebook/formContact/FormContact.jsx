import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import {
  useGetPhoneBookQuery,
  useAddPhoneBookMutation,
} from 'redux/services/contactsSlice';
import { Input, Button, Form, WrapperLabelInput } from './FormContact.styled';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { data } = useGetPhoneBookQuery();
  const [addPhoneBook] = useAddPhoneBookMutation();
  const filteredContacts = data
    ? data.filter(contact =>
        contact.name
          ? contact.name.toLowerCase().includes(name.toLowerCase())
          : data
      )
    : data;

  let contactNameId = nanoid();
  let contactNumberId = nanoid();

  const onChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhoneNumber(value);
        break;
      default:
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (filteredContacts.length > 0) {
      return toast.warn(
        '💩 There is already a contact with that name. Correct the entered name!'
      );
    }
    addPhoneBook({ name, phoneNumber });
    toast.success(`💪 Contact (${name}) added successfully !`);
    setName('');
    setPhoneNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Phone Book</h2>
      <WrapperLabelInput>
        <label htmlFor={contactNameId}>Name</label>
        <Input
          onChange={onChange}
          value={name}
          type="text"
          name="name"
          id={contactNameId}
          placeholder="Aleksandr"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </WrapperLabelInput>
      <WrapperLabelInput>
        <label htmlFor={contactNumberId}>Number</label>
        <Input
          onChange={onChange}
          value={phoneNumber}
          type="tel"
          name="number"
          id={contactNumberId}
          placeholder="+380956888227"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </WrapperLabelInput>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
