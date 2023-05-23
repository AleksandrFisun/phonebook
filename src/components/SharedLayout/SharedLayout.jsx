import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'loader/Loader';
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
              <Link to="/phone-book">Phone Book</Link>
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
