import SignInForm from './SignInForm/SignInFrom';
import { Section, FormWrapper } from './SignIn.style';
const SignIn = () => {
  return (
    <Section>
      <FormWrapper>
        <SignInForm />
      </FormWrapper>
    </Section>
  );
};
export default SignIn;
