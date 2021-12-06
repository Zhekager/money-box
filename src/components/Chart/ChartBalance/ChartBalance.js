import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './ChartBalance.module.scss';

export default function ChartBalance() {
  const balance = useSelector(authSelectors.getTransactionBalance);
  const lastBalance = useSelector(authSelectors.getTransactionAuthBalance);
  const arrBalances = useSelector(authSelectors.getArrTransactionAuthBalance);

  const formatSum = sum => {
    if (!String(sum).includes('.')) {
      const num = Number(sum);
      return num.toFixed(2);
    }
  };

  return (
    <>
      <div>
        <p className={styles.balance}>
          &#8372;
          {(balance > 0 || balance < 0) && formatSum(balance)}
          {(lastBalance >= 0 || lastBalance < 0) && formatSum(lastBalance)}
          {!balance && arrBalances.length === 0 && formatSum(0)}
        </p>
      </div>
    </>
  );
}
