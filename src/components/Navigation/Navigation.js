import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { Home } from '../IconBtn/Home';
import { Statistic } from '../IconBtn/Statistic';
import { Currenc } from '../IconBtn/Currenc';

import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div>
      <nav className={styles.navigation}>
        <NavLink
          to="home"
          className={({ isActive }) => {
            return isActive ? styles.navLinkActive : styles.navLink;
          }}
        >
          <div className={styles.boxNav}>
            <Home svg={styles.svgNav} />
            <span className={styles.textNav}>Home</span>
          </div>
        </NavLink>
        <NavLink
          to="statistics"
          className={({ isActive }) => {
            return isActive ? styles.navLinkActive : styles.navLink;
          }}
        >
          <div className={styles.boxNav}>
            <Statistic svg={styles.svgNav} />
            <span className={styles.textNav}>Statistics</span>
          </div>
        </NavLink>
        <Media
          queries={{
            mobile: '(max-width: 767px)',
          }}
        >
          {({ mobile }) => (
            <>
              {mobile && (
                <NavLink
                  to="currency"
                  className={({ isActive }) => {
                    return isActive ? styles.navLinkActive : styles.navLink;
                  }}
                >
                  <Currenc svg={styles.svgNav} />
                </NavLink>
              )}
            </>
          )}
        </Media>
      </nav>
    </div>
  );
}

export default Navigation;
