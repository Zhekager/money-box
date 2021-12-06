import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './ChartBalance.module.scss';

export default function ChartBalance() {
  const balance = useSelector(authSelectors.getTransactionBalance);
  const arrTransactionsAuth = useSelector(authSelectors.getTransactionsAuth);
  const arr = Array.from(arrTransactionsAuth);
  const arrBalances = arr.map(({ balance }) => balance);
  const transactionBalance = arrBalances[arrBalances.length - 1];

  const formatSum = sum => {
    if (!String(sum).includes('.')) {
      return sum.toFixed(2);
    }
  };

  return (
    <>
      <div>
        <p className={styles.balance}>
          &#8372;
          {/* {balance >= 0 ? balance : transactionBalance} */}
          {balance > 0 || balance < 0 ? balance : transactionBalance}
          {!balance && arrBalances.length === 0 && formatSum(0)}
        </p>
      </div>
    </>
  );
}
