import { Section } from './section/Section';
import { FormContact } from './formContact/FormContact';
import { SearchContact } from './searchContact/SearchContact';
import { ListContact } from './listContact/ListContact';

const PhoneBook = () => {
  return (
    <>
      <Section>
        <FormContact />
        <SearchContact />
        <ListContact />
      </Section>
    </>
  );
};
export default PhoneBook;
