import { Item, Span, ButtonDel, ButtonWrapper } from './itemContact.styled';
import { useDeletePhoneBookMutation } from 'redux/services/contactsSlice';
import SpinnerSmall from 'loader/Spinner';
import PropTypes from 'prop-types';

const ItemContact = ({ name, number, id }) => {
  const [deletePhoneBook, { isLoading }] = useDeletePhoneBookMutation();

  return (
    <>
      <Item id={id}>
        <Span>{name}</Span>
      </Item>
      <Item>
        <Span>{number}</Span>
      </Item>
      <Item>
        <div>
          <ButtonDel onClick={() => deletePhoneBook(id)} disabled={isLoading}>
            <ButtonWrapper>
              {isLoading && <SpinnerSmall />}
              <span>Delete</span>
            </ButtonWrapper>
          </ButtonDel>
        </div>
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
