import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { authOperations, authSelectors } from "./redux/auth";
import { ThemeContext, themes } from "./context/themeContext";

import { PublickRoute } from "./component/PublickRoutes";
import { PrivateRoute } from "./component/PrivateRoute";

import { Header } from "./component/Header/Header.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import ReportPage from "./pages/ReportPage/ReportPage";
//import OnLoader from "./component/OnLoader";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { MobileForm } from "./pages/HomePage/MobileForm/MobileForm";

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? themes.light
  );

  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());

    let secondTimerId = null;
    if (isLoggedIn) {
      dispatch(authOperations.refreshTokens());

      secondTimerId = setInterval(() => {
        dispatch(authOperations.refreshTokens());
      }, 600000);
    }

    return () => {
      clearInterval(secondTimerId);
    };
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
                    {/* /homepage/expense */}
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

              <Route
                path="/add-expense"
                element={
                  <PrivateRoute>
                    <MobileForm transaction="expense" />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-income"
                element={
                  <PrivateRoute>
                    <MobileForm transaction="income" />
                  </PrivateRoute>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
