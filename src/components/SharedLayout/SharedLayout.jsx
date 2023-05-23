import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'loader/Loader';
import {
  Searchbar,
  Link,
  Nav,
  NavList,
  NavItem,
} from 'components/sharedLayout/SharedLayout.style';

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
              <Link to="/book-contacts">Book contacts</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Searchbar>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
