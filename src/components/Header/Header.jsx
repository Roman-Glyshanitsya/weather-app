import { FaCircleUser } from 'react-icons/fa6';
import s from './Header.module.css';
import logo from '../../images/logo.png';

export const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.mobileMenuContainer}>
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
      </div>
      <button className={s.mobileMenuButton} type="button">
        Menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={s.mobileMenuIcon}
        >
          <path
            d="M1 1L5.24264 5.24264L9.48528 1"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </header>
  );
};
