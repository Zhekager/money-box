import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionOperations from '../../../redux/transactions/transaction-operations';
import transactionsSelectors from '../../../redux/transactions/transaction-selectors';
// import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './HomeTabDesktop.module.scss';

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];

export default function HomeTabDesktop() {
  const dispatch = useDispatch();
  const arr = useSelector(transactionsSelectors.getTransactions);

  useEffect(() => {
    dispatch(transactionOperations.getTransactions());
  }, [dispatch]);

  return (
    <>
      <table className={styles.homeTab}>
        <thead className={styles.homeTabHead}>
          <tr className={styles.homeTabHeadRow}>
            {tableHeadData.map(head => (
              <th className={styles.homeTabHeadData} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.homeTabBody}>
          {arr?.map(
            ({ _id, type, date, money, category, comment, balance }) => (
              <tr key={_id} className={styles.homeTabBodyRow}>
                <td className={styles.homeTabBodyData}>{date}</td>
                <td className={styles.homeTabBodyData}>{type}</td>
                <td className={styles.homeTabBodyData}>{category}</td>
                <td className={styles.homeTabBodyData}>{comment}</td>
                <td
                  className={
                    type === '+'
                      ? styles.homeTabBodyDataPlus
                      : styles.homeTabBodyDataMinus
                  }
                >
                  {money}
                </td>
                <td className={styles.homeTabBodyData}>{balance}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
