import React from 'react';
import { useSelector } from 'react-redux';
import transactionsSelectors from '../../../redux/transactions/transaction-selectors';

import styles from './HomeTabDesktop.module.scss';

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];

export default function HomeTabDesktop() {
  const arr = useSelector(transactionsSelectors.getTransactions);

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
                <td className={styles.homeTabBodyData}>{category.name}</td>
                <td className={styles.homeTabBodyData}>{comment}</td>
                <td
                  // className={
                  //   type === '+'
                  //     ? 'styles.homeTabBody_data homeTabBody_data--plus'
                  //     : 'styles.homeTabBody_data homeTabBody_data--minus'
                  // }

                  // type === '+' ? className={styles.homeTabBody_dataPlus} : className={styles.homeTabBody_dataMinus}
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
