import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/features/contacts/contactsSlice';
import {
  InputSearchContact,
  WrapperSearchContact,
} from './SearchContact.style';
import { nanoid } from 'nanoid';

export const SearchContact = () => {
  const idSerachContact = nanoid();
  const dispatch = useDispatch(state => state.filter);

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    dispatch(filterContact(value));
  };
  return (
    <>
      <WrapperSearchContact>
        <label htmlFor={idSerachContact}>Find contacts by name</label>
        <InputSearchContact
          onChange={handleChange}
          type="text"
          id={idSerachContact}
          placeholder="Search contact"
        />
      </WrapperSearchContact>
    </>
  );
};
