const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUsernameCurrent = state => state.auth.user.user.name;
const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getBalance = state => state.auth.user.balance;

const getIsRegistered = state => state.auth.isRegistered;

// const getCategories = state => state.auth.user;

const getTransactionsUser = state => state.auth.user.transactions;

// const addTransactionsUser = state => state.auth.user.transactions;

const authSelectors = {
  // getUsernameCurrent,
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getLoading,
  getError,
  getToken,
  getBalance,
  getIsRegistered,
  getTransactionsUser,
  // addTransactionsUser,
  // getCategories,
};
export default authSelectors;
