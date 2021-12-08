import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './ChartBalance.module.scss';

export default function ChartBalance() {
  const transactions = useSelector(authSelectors.getTransactionsAuth);
  const lastBalance = useSelector(authSelectors.getTransactionAuthBalance);
  const arrBalances = useSelector(authSelectors.getArrTransactionAuthBalance);

  // const formatSum = sum => {
  //   if (!String(sum).includes('.')) {
  //     const num = Number(sum);
  //     return num.toFixed(2);
  //   }
  // };

  const formatSum = sum => {
    return new Intl.NumberFormat('ua-UA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(sum);
  };

  // const formatSum = sum => {
  //   const formatSumString = String(new Intl.NumberFormat('ua-UA').format(sum));

  //   if (!String(sum).includes('.')) {
  //     return `${formatSumString}${',00'}`;
  //   }

  //   const arrSum = String(sum).split('');
  //   const arrIndex = arrSum.indexOf('.');
  //   let resultDecimal = arrSum.splice(arrIndex + 1);
  //   const resultInteger = arrSum.splice(0, arrIndex + 1);
  //   if (String(sum).includes('.') && resultDecimal.length === 1) {
  //     return `${formatSumString}${'0'}`;
  //   }

  //   if (String(sum).includes('.') && resultDecimal.length > 2) {
  //     resultDecimal = resultDecimal.splice(0, 2);
  //     const summArr = [...resultInteger, ...resultDecimal];
  //     const summ = Number(summArr.join(''));
  //     const formatSummString = String(
  //       new Intl.NumberFormat('ua-UA').format(summ),
  //     );

  //     if (summ >= 0 && summ < 0.01) {
  //       return `${formatSummString}${',00'}`;
  //     }
  //     return formatSummString;
  //   }
  //   return formatSumString;
  // };

  return (
    <>
      <div>
        <p className={styles.balance}>
          &#8372;
          {transactions.balance &&
            (transactions.balance >= 0 || transactions.balance < 0) &&
            formatSum(transactions.balance)}
          {(lastBalance >= 0 || lastBalance < 0) && formatSum(lastBalance)}
          {!transactions.balance && arrBalances.length === 0 && formatSum(0)}
        </p>
      </div>
    </>
  );
}
