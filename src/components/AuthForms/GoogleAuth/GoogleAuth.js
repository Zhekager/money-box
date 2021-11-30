// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import authOperations from '../../../redux/auth/auth-operations';
import ButtonIcon from '../../ButtonIcon';
import { Google } from '../../IconBtn/Google';

import styles from './GoogleAuth.module.scss';

const GoogleAuth = () => {
  // const dispatch = useDispatch();
  // useEffect(() => dispatch(authOperations.getUserByGoogleAuth()), [dispatch]);

  return (
    <a
      className={styles.Link}
      href="https://personal-expenses.herokuapp.com/api/users/google-user"
    >
      <ButtonIcon
        onClick={() => console.log('click')}
        btnClass="BtnGoogle"
        type="submit"
        aria-label="Open Google form"
      >
        <Google svg={styles.svgGoogle} />
        Log in with Google
      </ButtonIcon>
    </a>
  );
};

export default GoogleAuth;
