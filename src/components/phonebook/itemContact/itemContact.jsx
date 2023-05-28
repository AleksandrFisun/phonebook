import PropTypes from 'prop-types';
import SpinnerSmall from 'Loader/Spinner';
import { useDeletePhoneBookMutation } from 'Redux/services/contactsSlice';
import {
  Item,
  Span,
  ButtonDel,
  ButtonWrapper,
  ContactContent,
} from './itemContact.styled';

const ItemContact = ({ name, number, id }) => {
  const [deletePhoneBook, { isLoading }] = useDeletePhoneBookMutation();

  return (
    <>
      <Item>
        <ContactContent id={id}>
          <Span>{name}</Span>
        </ContactContent>
        <ContactContent>
          <Span>{number}</Span>
        </ContactContent>
        <ContactContent>
          <ButtonDel onClick={() => deletePhoneBook(id)} disabled={isLoading}>
            <ButtonWrapper>
              {isLoading && <SpinnerSmall />}
              <span>Delete</span>
            </ButtonWrapper>
          </ButtonDel>
        </ContactContent>
      </Item>
    </>
  );
};
export default ItemContact;
ItemContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
