import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authOperations, authSelectors } from "./redux/auth";

import { Header } from "./component/Header/Header.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import ReportPage from "./pages/ReportPage/ReportPage";
import CostIncome from "./component/CostIncome/CostIncome";

//import OnLoader from "./component/OnLoader";

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {!isFetchingCurrentUser && (
        <>
          {/*<OnLoader />*/}
          <Header />
          <AuthPage />
          {/* <ReportPage /> */}
        </>
      )}
      <CostIncome />
    </div>
  );
};

export default App;
