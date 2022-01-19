import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { authOperations, authSelectors } from "./redux/auth";

import { PublickRoute } from "./component/PublickRoutes";
import { PrivateRoute } from "./component/PrivateRoute";

import { Header } from "./component/Header/Header.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import ReportPage from "./pages/ReportPage/ReportPage";
//import OnLoader from "./component/OnLoader";
import TransactionPage from "./pages/TransactionPage/TransactionPage";

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const sid = useSelector(authSelectors.getUserSid);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    if (isLoggedIn) {
      let firstTimerId = setTimeout(() => {
        clearTimeout(firstTimerId);
        let secondTimerId = setInterval(() => {
          clearTimeout(secondTimerId);
          dispatch(authOperations.refreshTokens({ sid }));
        }, 900000);
      }, 900000);
    }
  }, [dispatch, isLoggedIn, sid]);

  return (
    <div>
      <Header />
      {!isFetchingCurrentUser && (
        <>
          {/*<OnLoader />*/}
          <Routes>
            <Route
              path="/"
              element={
                <PublickRoute restricted redirectTo="/transaction/expense">
                  <AuthPage />
                </PublickRoute>
              }
            />
            <Route
              path="/transaction/*"
              element={
                <PrivateRoute>
                  <TransactionPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/report"
              element={
                <PrivateRoute>
                  <ReportPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
