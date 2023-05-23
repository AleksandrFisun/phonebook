import { useDispatch, useSelector } from 'react-redux';

import {
  InputSearchContact,
  WrapperSearchContact,
} from './SearchContact.style';
import { nanoid } from 'nanoid';
import { filterContacts } from 'redux/actions/contactsActions';

export const SearchContact = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const idSerachContact = nanoid();

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    dispatch(filterContacts(value));
  };


  return (
    <>
      <WrapperSearchContact>
        <label htmlFor={idSerachContact}>Find contacts by name</label>
        <InputSearchContact
          onChange={handleChange}
          value={filter}
          type="text"
          id={idSerachContact}
          placeholder="Search contact"
        />
      </WrapperSearchContact>
    </>
  );
};
