import RegistrationForm from 'components/Registration/registrationForm/RegistrationForm';
import { Section, FormWrapper } from './Registration.style';
const Registration = () => {
  return (
    <Section>
      <FormWrapper>
        <RegistrationForm />
      </FormWrapper>
    </Section>
  );
};
export default Registration;
