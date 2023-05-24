import { Item, Span, ButtonDel } from './itemContact.styled';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
const ItemContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
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
          <ButtonDel onClick={() => dispatch(deleteContact(id))}>
            Delete
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
