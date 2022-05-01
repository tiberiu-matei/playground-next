import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Investager</title>
                <meta
                    name="playground"
                    content="stuff"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <a
                        href="#"
                        className={
                            styles.card
                        }
                    >
                        <h2>Cryo</h2>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default Home;
