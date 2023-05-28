import {
  Searchbar,
  Link,
  Nav,
  NavList,
  NavItem,
  LogotypeWrapper,
  LogotypeText,
  LogotyImg,
} from 'components/AppBar/AppBar.style';
const AppBar = () => {
  return (
    <>
      <Searchbar>
        <LogotypeWrapper>
          <LogotyImg
            src="https://img.icons8.com/clouds/100/phone-book.png"
            alt="Logotype phone book"
          />
          <LogotypeText>Air Contact</LogotypeText>
        </LogotypeWrapper>
        <Nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/sign-in">Sign in</Link>
            </NavItem>
            <NavItem>
              <Link to="/phone-book">Phone Book</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Searchbar>
    </>
  );
};
export default AppBar;
