import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Searchbar,
  Link,
  Nav,
  NavList,
  NavItem,
} from 'components/SharedLayout/SharedLayout.style';

export const SharedLayout = () => {
  return (
    <>
      <Searchbar>
        <Nav>
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contacts">Book contacts</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Searchbar>

      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
