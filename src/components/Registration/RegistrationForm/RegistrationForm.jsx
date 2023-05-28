import { nanoid } from 'nanoid';

import {
  Form,
  InputWrapper,
  NavigateLink,
  Button,
  Input,
  Label,
  InputContainer,
  User,
  Email,
  Password,
} from './RegistrationForm.style';
const RegistrationForm = () => {
  let contactNameId = nanoid();
  let contactEmailId = nanoid();
  let contactPasswordId = nanoid();

  return (
    <>
      <h2>Registartion</h2>
      <Form>
        <div>
          <InputWrapper>
            <Label htmlFor={contactNameId}>Name</Label>
            <InputContainer>
              <User />
              <Input
                type="text"
                name="name"
                id={contactNameId}
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </InputContainer>
          </InputWrapper>
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
        <Button type="submit">Registration</Button>
      </Form>
      <div>
        <span>Already registered? Go to</span>
        <NavigateLink to="/sign-in">Sign In</NavigateLink>
      </div>
    </>
  );
};
export default RegistrationForm;
