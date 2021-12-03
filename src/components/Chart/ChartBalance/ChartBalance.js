import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './ChartBalance.module.scss';

export default function ChartBalance() {
  const userBalance = useSelector(authSelectors.getBalance);
  const transactions = useSelector(authSelectors.getTransactionsUser);

  return (
    <>
      {transactions.length >= 1 && (
        <div>
          <p className={styles.balance}>&#8372; {userBalance}</p>
        </div>
      )}
    </>
  );
}
