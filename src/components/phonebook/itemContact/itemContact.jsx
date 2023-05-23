import { Item, Span, ButtonDel } from './itemContact.styled';
import { deleteContact } from 'redux/actions/contactsActions';
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
