import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartBalance from './ChartBalance';

import styles from './Chart.module.scss';

export default function MyChart() {
  return (
    <div className={styles.chart}>
      {/* <p className={styles.title}>Statistics</p> */}{' '}
      {/* уже есть в диаграмм табе */}
      <div className={styles.containerChart}>
        <ChartBalance />
        <div className={styles.doughnut}>
          <Doughnut
            data={{
              datasets: [
                {
                  //   data: categoriesSummary
                  //     ? Object.values(categoriesSummary)
                  //     : null,
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    '#FED057',
                    '#FFD8D0',
                    '#FD9498',
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
                    '#FD9498',
                    '#C5BAFF',
                    '#6E78E8',
                    '#4A56E2',
                    '#81E1FF',
                    '#24CCA7',
                    '#00AD84',
                  ],
                  borderWidth: 1,
                  cutout: 90,
                },
                // {
                //   label: '# of Votes',
                //   data: arrMoney,
                //   backgroundColor: arrColors,
                //   borderColor: arrColors,
                //   borderWidth: 1,
                //   cutout: 90,
                // },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            height={270}
            width={270}
          />
        </div>
      </div>
    </div>
  );
}
