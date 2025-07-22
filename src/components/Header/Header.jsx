import { FaCircleUser } from 'react-icons/fa6';
import s from './Header.module.css';
import logo from '../../images/logo.png';
// import arrow from '../../images/arrow-down.png';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
      <ul className={s.headerList}>
        <li className={s.headerItem}>Who we are</li>
        <li className={s.headerItem}>Contacts</li>
        <li className={s.headerItem}>Menu</li>
      </ul>

      <div className={s.userContainer}>
        <button className={s.button} type="button">
          Sign Up
        </button>
        <FaCircleUser className={s.iconUser} />
      </div>
      <MobileMenu />
    </header>
  );
};
