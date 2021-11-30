import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './HomeTabDesktop.module.scss';

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum', 'Balance'];

export default function HomeTabDesktop() {
  const arr = useSelector(authSelectors.getTransactionsUser);

  return (
    <>
      <table className={styles.homeTab}>
        <thead className={styles.homeTabHead}>
          <tr className={styles.homeTabHead_row}>
            {tableHeadData.map(head => (
              <th className={styles.homeTabHead_data} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.homeTabBody}>
          {arr?.map(
            ({ _id, type, date, money, category, comment, balance }) => (
              <tr key={_id} className={styles.homeTabBody_row}>
                <td className={styles.homeTabBody_data}>{date}</td>
                <td className={styles.homeTabBody_data}>{type}</td>
                <td className={styles.homeTabBody_data}>{category.name}</td>
                <td className={styles.homeTabBody_data}>{comment}</td>
                <td
                  className={
                    type === '+'
                      ? 'styles.homeTabBody_data homeTabBody_data--plus'
                      : 'styles.homeTabBody_data homeTabBody_data--minus'
                  }
                >
                  {money}
                </td>
                <td className={styles.homeTabBody_data}>{balance}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  );
}
