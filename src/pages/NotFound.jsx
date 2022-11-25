import {
  NavLinkNotFound,
  DivStyled,
  TextStyled,
  Numberstyled,
} from 'components/BackBTN/BackBTN.styled';

export default function NotFound() {
  return (
    <DivStyled>
      <div>
        <Numberstyled>404</Numberstyled>
        <TextStyled>
          Not found. Incorrect address or communication problems.
          <NavLinkNotFound to="/">Home page</NavLinkNotFound>
        </TextStyled>
      </div>
    </DivStyled>
  );
}
