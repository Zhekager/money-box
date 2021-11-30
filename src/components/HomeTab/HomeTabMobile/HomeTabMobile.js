import { transactions } from '../../../assets/data/select-data/selectData';

import styles from './HomeTabMobile.module.scss';

export default function HomeTabMobile() {
  // const res = transactions.data;

  return (
    <>
      {transactions.map(item => {
        const borderColor = item.Expenses ? '#ff6596' : '#24cca7';
        const result = item.Expenses ? '-' : '+';

        return (
          <ul
            key={item.id}
            // className={
            //   result === '+' ? 'mobile-list mobile-list--plus' : 'mobile-list'
            // }
            className={
              result === '+' ? styles.mobileListPlus : styles.mobileList
            }
            style={{ borderColor: borderColor }}
          >
            <li className="mobileListItem">
              <span className="mobileListCategory">Date</span>
              <span className="mobileListData">{item.date}</span>
            </li>
            <li className="mobileListItem">
              <span className="mobileListCategory">Type</span>
              <span className="mobileListData">{result}</span>
            </li>
            <li className="mobileListItem">
              <span className="mobileListCategory">Category</span>
              <span className="mobileListData">{item.category}</span>
            </li>
            <li className="mobileListItem">
              <span className="mobileListCategory">Comment</span>
              <span className="mobileListData">{item.comment}</span>
            </li>
            <li className="mobileListItem">
              <span className="mobileListCategory">Sum</span>
              <span
                // className={
                //   result === '+'
                //     ? 'mobile-list_data mobile-list_data--plus'
                //     : 'mobile-list_data mobile-list_data--minus'
                // }

                className={
                  result === '+'
                    ? styles.mobileListDataPlus
                    : styles.mobileListDataMinus
                }
                style={{ borderColor: borderColor }}
              >
                {item.sum}
              </span>
            </li>
            <li className="mobileListItem">
              <span className="mobileListCategory">Balance</span>
              <span className="mobileListData">{item.balance}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
}
