import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionsSelectors from '../../redux/transactions/transaction-selectors';
// import authOperations from '../../redux/auth/auth-operations';
import transactionOperations from '../../redux/transactions/transaction-operations';
import routes from '../../assets/routes';

import styles from './Balance.module.scss';

const Balance = () => {
  const location = useLocation();
  const userBalance = useSelector(authSelectors.getBalance);
  // const transactions = useSelector(transactionsSelectors.getTransactions);
  // const transactionsUser = useSelector(authSelectors.getTransactionsUser);
  //const transBalance = useSelector(transactionOperations.addTransactions());
  const arrBalances = useSelector(transactionsSelectors.getTransactionsBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  const transactionBalance = arrBalances[arrBalances.length - 1];

  return (
    <>
      {location.pathname === routes.dashboard && (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>balance</h2>
          <p className={styles.text}>
            <span className={styles.currency}>&#8372;</span>
            {transactionBalance}
          </p>
        </div>
      )}

      {location.pathname === routes.statistics && (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>balance</h2>
          <p className={styles.text}>
            <span className={styles.currency}>&#8372;</span>
            {userBalance}
          </p>
        </div>
      )}
    </>
  );
};

export default Balance;
