import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './ChartBalance.module.scss';

export default function ChartBalance() {
  const userBalance = useSelector(authSelectors.getBalance);

  return (
    <div>
      <p
        // className={styles.balance}
        className={
          userBalance >= 0 ? styles.balancePositive : styles.balanceNegative
        }
      >
        &#8372; {userBalance}
      </p>
    </div>
  );
}
