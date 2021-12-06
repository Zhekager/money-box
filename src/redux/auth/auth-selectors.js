const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getIsRegistered = state => state.auth.isRegistered;

// const getCategories = state => state.auth.user;

const getTransactionsUser = state => state.auth.user.transactions;

const getTransactionBalance = state => state.auth.transactions.balance;
const getTransactionsAuth = state => state.auth.transactions;
// const getBalance = state => state.auth.user.balance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getLoading,
  getError,
  getToken,
  // getBalance,
  getIsRegistered,
  getTransactionsUser,
  getTransactionBalance,
  getTransactionsAuth,
  // addTransactionsUser,
  // getCategories,
};
export default authSelectors;
