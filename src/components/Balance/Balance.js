import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
// import authOperations from '../../redux/auth/auth-operations';
// import transactionsSelectors from '../../redux/transactions/transaction-selectors';
// import transactionOperations from '../../redux/transactions/transaction-operations';

import styles from './Balance.module.scss';

const Balance = () => {
  const userBalance = useSelector(authSelectors.getBalance);
  //const transBalance = useSelector(transactionOperations.addTransactions());
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // });


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>balance</h2>
      <p className={styles.text}>
        <span className={styles.currency}>&#8372;</span>
        {userBalance}
      </p>
    </div>
  );
};

export default Balance;
