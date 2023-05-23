import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterContacts } from 'redux/actions/contactsActions';
import {
  InputSearchContact,
  WrapperSearchContact,
} from './SearchContact.style';

export const SearchContact = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const idSerachContact = nanoid();

  return (
    <>
      <WrapperSearchContact>
        <label htmlFor={idSerachContact}>Find contacts by name</label>
        <InputSearchContact
          onChange={e =>
            dispatch(filterContacts(e.target.value.toLowerCase().trim()))
          }
          value={filter}
          type="text"
          id={idSerachContact}
          placeholder="Search contact"
        />
      </WrapperSearchContact>
    </>
  );
};
