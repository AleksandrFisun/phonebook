import { nanoid } from 'nanoid';
import {
  InputWrapper,
  InputContainer,
  Input,
  Label,
  Email,
  Password,
} from './SignInInput.style';

const SignInInput = ({ onChange, email, password }) => {
  let contactEmailId = nanoid();
  let contactPasswordId = nanoid();

  return (
    <>
      <InputWrapper>
        <Label htmlFor={contactEmailId}>Email</Label>
        <InputContainer>
          <Email />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
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
            value={password}
            onChange={onChange}
            id={contactPasswordId}
            placeholder="Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </InputContainer>
      </InputWrapper>
    </>
  );
};
export default SignInInput;
