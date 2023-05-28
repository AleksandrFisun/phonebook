import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarr from 'components/AppBar/AppBar';

import Loader from 'Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <AppBarr />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
