import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionOperations from '../../redux/transactions/transaction-operations';

import styles from './Balance.module.scss';

const Balance = () => {
  const balance = useSelector(authSelectors.getTransactionBalance);

  const arrTransactionsAuth = useSelector(authSelectors.getTransactionsAuth);
  const arr = Array.from(arrTransactionsAuth);
  const arrBalances = arr.map(({ balance }) => balance);

  const transactionBalance = arrBalances[arrBalances.length - 1];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>balance</h2>
        <p className={styles.text}>
          <span className={styles.currency}>&#8372;</span>
          {balance ? balance : transactionBalance}
        </p>
      </div>
    </>
  );
};

export default Balance;
