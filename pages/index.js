// const inter = Inter({ subsets: ["latin"] });
import Layout from './Layout';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <h1>Welcome to proBoard!</h1>
        <section className={styles.content}>
          <div className={styles.description}>
            <h3>About proBoard</h3>
            <p>
              proBoard is designed to be a free-to-use, lightweight application
              where small teams can collaborate using interactive project
              boards.
            </p>
          </div>
          <h2>
            Made by developers,
            <br /> made for developers.
          </h2>
        </section>
      </main>
    </Layout>
  );
}
