import { nanoid } from 'nanoid';
import { Section } from './section/Section';
import { FormContact } from './formContact/FormContact';
import { SearchContact } from './searchContact/SearchContact';
import { ListContact } from './listContact/ListContact';

const PhoneBook = () => {
  const formSubmitHandler = ({ name, number, id = nanoid() }) => {
    // const newContact = { name, number, id };
    // contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    //   ? alert(`${name} is already in contacts`)
    //   : setContacts([newContact, ...contacts]);
  };

  const deleteContact = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
  };
  const searchContact = e => {
    // setFilter(e.currentTarget.value);
  };

  const filterList = () => {
    // const normalizedFilter = filter.toLowerCase();
    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );
  };

  return (
    <>
      <Section>
        <FormContact addContact={formSubmitHandler} />
        <SearchContact onChange={searchContact} />

        <ListContact contacts={filterList()} onClick={deleteContact} />
      </Section>
    </>
  );
};
export default PhoneBook;
