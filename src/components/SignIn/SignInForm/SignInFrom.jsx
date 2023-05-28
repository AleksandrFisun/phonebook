import { nanoid } from 'nanoid';

import { Form, InputWrapper, NavigateLink, Button } from './SignInForm.style';
const SignInForm = () => {
  let contactEmailId = nanoid();
  let contactPasswordId = nanoid();
  return (
    <>
      <h2>Sign In</h2>
      <Form>
        <div>
          <InputWrapper>
            <label htmlFor={contactEmailId}>Email</label>
            <input
              type="email"
              name="email"
              id={contactEmailId}
              placeholder="Email address"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor={contactPasswordId}>Password</label>
            <input
              type="password"
              name="password"
              id={contactPasswordId}
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </InputWrapper>
        </div>
        <Button type="submit">Sign In</Button>
      </Form>
      <div>
        <span></span>
        <NavigateLink to="/sign-up">Sign Up</NavigateLink>
      </div>
    </>
  );
};
export default SignInForm;
