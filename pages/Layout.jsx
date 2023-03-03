import React from 'react';
import Head from 'next/head';
import styles from '../styles/header.module.css';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>proBoard</title>
      </Head>
      <header className={styles.header}>
        <h1>proBoard</h1>
        <nav className={styles.nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Dashboard</li>
          <button className={styles.signin}>Sign in With Google</button>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
