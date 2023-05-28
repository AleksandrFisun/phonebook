import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { filterContacts } from 'Redux/services/contactsSlice';
import {
  InputSearchContact,
  WrapperSearchContact,
} from './SearchContact.style';

export const SearchContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.phoneBookFilter.filter);
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
