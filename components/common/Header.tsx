// Dependencies
import React from 'react';
import Link from 'next/link';
// Styles
import styles from '@/styles/header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoText}>
          <Link href="/">uitodo</Link>
        </span>
      </div>
      <div className={styles.menu}>
        <nav className={styles.nav}>
          <li className={styles.navItem}>
            New List
          </li>
          <li className={styles.navItem}>
            About
          </li>
        </nav>
      </div>
    </header>
  ); 
}

export default Header;
