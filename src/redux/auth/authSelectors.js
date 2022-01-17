const getUserEmail = (state) => state.auth.user.email;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserEmail,
  getIsLoggedIn,
  getIsFetchingCurrent,
};
export default authSelectors;
