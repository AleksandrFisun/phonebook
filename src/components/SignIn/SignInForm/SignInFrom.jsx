import { nanoid } from 'nanoid';

import {
  Form,
  InputWrapper,
  NavigateLink,
  Button,
  Input,
  Label,
  InputContainer,
  Email,
  Password,
} from './SignInForm.style';
const SignInForm = () => {
  let contactEmailId = nanoid();
  let contactPasswordId = nanoid();
  return (
    <>
      <h2>Sign In</h2>
      <Form>
        <div>
          <InputWrapper>
            <Label htmlFor={contactEmailId}>Email</Label>
            <InputContainer>
              <Email />
              <Input
                type="email"
                name="email"
                id={contactEmailId}
                placeholder="Email address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </InputContainer>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor={contactPasswordId}>Password</Label>
            <InputContainer>
              <Password />
              <Input
                type="password"
                name="password"
                id={contactPasswordId}
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
            </InputContainer>
          </InputWrapper>
        </div>
        <Button type="submit">Sign In</Button>
      </Form>
      <div>
        <span>New to Air Contact? Go to </span>
        <NavigateLink to="/registration">Registration</NavigateLink>
      </div>
    </>
  );
};
export default SignInForm;