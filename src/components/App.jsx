import { ContactPage } from 'pages/ContactPage/ContactPage';
import Home from 'pages/Home/Home';
import { Layout } from 'pages/Layout/Layout';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import NOtFound from 'pages/NotFound/NotFoud';
import { Register } from 'pages/RegisterPage/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublickRoute } from './PublickRoute';

export const MyCompononet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublickRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <Register />
              </PublickRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublickRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublickRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NOtFound />} />
        </Route>
      </Routes>
    </>
  );
};
