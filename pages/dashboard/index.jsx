import React from 'react';
import Layout from '../Layout';
import styles from '../../styles/dashboard.module.css';
import Link from 'next/link';

const dashboard = ({ children, username }) => {
  return (
    <Layout>
      <main className={styles.container}>
        <nav className={styles.nav}>
          <Link href={`/dashboard/${username}`}>{username}</Link>
        </nav>
        <section className={styles.content}>{children}</section>
      </main>
    </Layout>
  );
};

export default dashboard;

export async function getServerSideProps(context) {
  const username = 'johnmoormaniii';
  return {
    props: {
      username,
    },
  };
}
