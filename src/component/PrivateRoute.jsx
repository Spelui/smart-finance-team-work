import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export const PrivateRoute = ({ children }) => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  return isLogIn ? children : <Navigate to="/" />;
};
