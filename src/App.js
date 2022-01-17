import { Header } from "./component/Header/Header.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import ReportPage from "./pages/ReportPage/ReportPage";

const App = () => {
  return (
    <div>
      <Header />
      <AuthPage />
      {/* <ReportPage /> */}
    </div>
  );
};

export default App;
