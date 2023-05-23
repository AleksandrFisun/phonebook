import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="contacts"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Contacts />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading ...</h2>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};
