import React from 'react';
import { useSelector} from 'react-redux';
import transactionsSelectors from '../../redux/transactions/transaction-selectors';
import { Doughnut } from 'react-chartjs-2';
import ChartBalance from './ChartBalance';

import styles from './Chart.module.scss';

export default function MyChart() {
  const { categoriesSummary } = useSelector(transactionsSelectors.getStatistics);
  const data = {
    datasets: [
      {
        data: categoriesSummary
          ? Object.values(categoriesSummary)
          : null,
        backgroundColor: [
          '#FED057',
          '#F7A594',
          '#FCBEB1',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderColor: [
          '#FED057',
          '#FFD8D0',
          '#FCBEB1',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
        ],
        borderWidth: 1,
        cutout: 85,
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <div className={styles.containerChart}>
        <ChartBalance totalSpend/>
        <div className={styles.doughnut}>
          <Doughnut
            options={{ maintainAspectRatio: false }}
            height={270}
            width={270}
            data = {data}
          />
        </div>
      </div>
    </div>
  );
}
