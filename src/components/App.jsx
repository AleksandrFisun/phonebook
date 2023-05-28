import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/sharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage'));
const ContactsPage = lazy(() => import('Pages/PhoneBookPage'));
const SignInPage = lazy(() => import('Pages/SignInPage'));
const RegistrationPage = lazy(() => import('Pages/RegistrationPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="sign-in"
            element={
              <Suspense fallback={<Loader />}>
                <SignInPage />
              </Suspense>
            }
          />
          <Route
            path="registration"
            element={
              <Suspense fallback={<Loader />}>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route
            path="phone-book"
            element={
              <Suspense fallback={<Loader />}>
                <ContactsPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
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
