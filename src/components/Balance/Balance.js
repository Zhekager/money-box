import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionOperations from '../../redux/transactions/transaction-operations';

import styles from './Balance.module.scss';

const Balance = () => {
  const balance = useSelector(authSelectors.getTransactionBalance);
  const lastBalance = useSelector(authSelectors.getTransactionAuthBalance);
  const arrBalances = useSelector(authSelectors.getArrTransactionAuthBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  const formatSum = sum => {
    if (!String(sum).includes('.')) {
      const num = Number(sum);
      return num.toFixed(2);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>balance</h2>
        <p className={styles.text}>
          <span className={styles.currency}>&#8372;</span>
          {(balance > 0 || balance < 0) && formatSum(balance)}
          {(lastBalance >= 0 || lastBalance < 0) && formatSum(lastBalance)}
          {!balance && arrBalances.length === 0 && formatSum(0)}
        </p>
      </div>
    </>
  );
};

export default Balance;
