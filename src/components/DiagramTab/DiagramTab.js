import { useSelector } from 'react-redux';
import { getStatistics } from '../../redux/transactions/transaction-selectors';
import Chart from '../Chart';
import Table from '../Table';

import styles from './DiagramTab.module.scss';

export default function DiagramTab() {
  const data = useSelector(getStatistics);

  return (
    <section className={styles.SectionStats}>
      <h1 className={styles.StatisticsTitle}>Statistics</h1>
      <div className={styles.ContainerStats}>
        <Chart data={data} />
        <Table data={data} />
      </div>
    </section>
  );
}
