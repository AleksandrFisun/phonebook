import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';

const SignUpForm = () => {
  let contactNameId = nanoid();
  let contactEmailId = nanoid();
  let contactPasswordId = nanoid();
  return (
    <>
      <form>
        <label htmlFor={contactNameId}>Name</label>
        <input
          type="text"
          name="name"
          id={contactNameId}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={contactEmailId}>Email</label>
        <input
          type="email"
          name="email"
          id={contactEmailId}
          placeholder="Email address"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
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

        <button type="submit">Sign Up</button>
      </form>
      <div>
        <span></span>
        <NavLink to="/sign-in">Sign In</NavLink>
      </div>
    </>
  );
};
export default SignUpForm;
