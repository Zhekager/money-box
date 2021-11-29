import React, { useState } from 'react';
import Media from 'react-media';
import { useLocation, useHistory } from 'react-router-dom';
import routes from '../../assets/routes';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import HomeTab from '../../components/HomeTab';
import Modal from '../../components/Modal';
import TransactionForm from '../../components/TransactionForm';
import ButtonIcon from '../../components/ButtonIcon';
import useSizeScreen from '../../hooks/useSizeScreen';
import { HiX } from 'react-icons/hi';
import Currency from '../../components/Currency';
import Navigation from '../../components/Navigation';
import Balance from '../../components/Balance';
import DiagramTab from '../../components/DiagramTab';

import styles from './DashboardPage.module.scss';

export default function DashboardPage() {
  const sizeScreen = useSizeScreen();
  const location = useLocation();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const goToHomePage = () => history.push(routes.dashboard);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <div className={styles.dashboard}>
        <div className={styles.wrapper}>
          <Media
            queries={{
              mobileSize: '(max-width: 767px)',
              otherSize: '(min-width: 768px)',
            }}
          >
            {matches => {
              if (
                matches.otherSize === true &&
                location.pathname === routes.currency
              ) {
                goToHomePage();
              }
              return (
                <>
                  {matches.mobileSize && (
                    <>
                      <Navigation />
                      {location.pathname === routes.dashboard && <Balance />}
                      {location.pathname === routes.currency && <Currency />}
                      {location.pathname === routes.dashboard && <HomeTab />}
                      {location.pathname === routes.statistics && (
                        <DiagramTab />
                      )}
                    </>
                  )}

                  {matches.otherSize && (
                    <>
                      <Sidebar />
                      <div>
                        {location.pathname === routes.dashboard && <HomeTab />}
                        {location.pathname === routes.statistics && (
                          <DiagramTab />
                        )}
                      </div>
                      <aside className={styles.dashboard__aside}></aside>
                    </>
                  )}
                </>
              );
            }}
          </Media>

          <ButtonIcon
            onClick={onOpenModal}
            aria-label="Open modal"
            btnClass="ButtonIconAdd"
          >
            +
          </ButtonIcon>

          {showModal && (
            <Modal onClose={toggleModal}>
              <TransactionForm onClose={toggleModal} />

              {sizeScreen > 767 && (
                <ButtonIcon
                  btnClass="ButtonIconClose"
                  onClick={toggleModal}
                  aria-label="Close modal"
                >
                  <HiX />
                </ButtonIcon>
              )}
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}
