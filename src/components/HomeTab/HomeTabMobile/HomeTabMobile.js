import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionOperations from '../../../redux/transactions/transaction-operations';
import transactionsSelectors from '../../../redux/transactions/transaction-selectors';

import styles from './HomeTabMobile.module.scss';

export default function HomeTabMobile() {
  const dispatch = useDispatch();
  const arr = useSelector(transactionsSelectors.getTransactions);

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  return (
    <>
      {arr.map(({ _id, type, date, money, category, comment, balance }) => {
        const borderColor = type === '-' ? '#ff6596' : '#24cca7';
        return (
          <ul
            key={_id}
            className={
              type === '+' ? styles.mobileListPlus : styles.mobileList
            }
            style={{ borderColor: borderColor }}
          >
            <li className={styles.mobileListItem}>
              <span className={styles.mobileListCategory}>Date</span>
              <span className={styles.mobileListData}>{date}</span>
            </li>
            <li className={styles.mobileListItem}>
              <span className={styles.mobileListCategory}>Type</span>
              <span className={styles.mobileListData}>{type}</span>
            </li>
            <li className={styles.mobileListItem}>
              <span className={styles.mobileListCategory}>Category</span>
              <span className={styles.mobileListData}>{category}</span>
            </li>
            <li className={styles.mobileListItem}>
              <span className={styles.mobileListCategory}>Comment</span>
              <span className={styles.mobileListData}>{comment}</span>
            </li>
            <li className={styles.mobileListItem}>
              <span className={styles.mobileListCategory}>Sum</span>
              <span
                className={
                  type === '+'
                    ? styles.mobileListDataPlus
                    : styles.mobileListDataMinus
                }
                style={{ borderColor: borderColor }}
              >
                {money}
              </span>
            </li>
            <li className={styles.mobileListItem}>
              <span className={styles.mobileListCategory}>Balance</span>
              <span className={styles.mobileListData}>{balance}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
}
