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

const formatSum = sum => {
  if (!String(sum).includes('.')) {
    const num = Number(sum);
    return num.toFixed(2);
  }
};

const getTransactionBalanceFormat = state => {
  const transBal = getTransactionBalance(state);
  return formatSum(transBal);
};

const getTransactionAuthBalance = state => {
  const arrTransactionsAuth = getTransactionsAuth(state);
  const arr = Array.from(arrTransactionsAuth);
  const arrBalances = arr.map(({ balance }) => balance);
  const transactionBalance = arrBalances[arrBalances.length - 1];
  return formatSum(transactionBalance);
};

const getArrTransactionAuthBalance = state => {
  const arrTransactionsAuth = getTransactionsAuth(state);
  const arr = Array.from(arrTransactionsAuth);
  const arrBalances = arr.map(({ balance }) => balance);
  return arrBalances;
};

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getLoading,
  getError,
  getToken,
  getIsRegistered,
  getTransactionsUser,
  getTransactionBalance,
  getTransactionsAuth,
  getTransactionAuthBalance,
  getArrTransactionAuthBalance,
  getTransactionBalanceFormat,
  // addTransactionsUser,
  // getCategories,
};
export default authSelectors;
