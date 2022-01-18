import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import { authOperations, authSelectors } from "./redux/auth";

import { PublickRoute } from "./component/PublickRoutes";
import { PrivateRoute } from "./component/PrivateRoute";

import { Header } from "./component/Header/Header.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import ReportPage from "./pages/ReportPage/ReportPage";
import CostIncome from "./component/CostIncome/CostIncome";
import Expense from "./component/Expense/Expense";
//import OnLoader from "./component/OnLoader";

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log("~ isLoggedIn", isLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
                <PublickRoute restricted redirectTo="/transaction">
                  <AuthPage />
                </PublickRoute>
              }
            />

            <Route
              path="/transaction"
              element={
                <PrivateRoute>
                  <CostIncome />
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
      <CostIncome />
      <Expense />
    </div>
  );
};

export default App;
