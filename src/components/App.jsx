import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/sharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/PhoneBook'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="book-contacts"
            element={
              <Suspense fallback={<Loader />}>
                <Contacts />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
