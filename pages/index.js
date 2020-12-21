import Head from 'next/head';

import db from '@/util/db';

import styles from '@/styles/index.module.scss';
import Wave from '@/components/common/Wave';
import Button from '@/components/common/Button';

export default function Home() {

  return (
    <div>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.waveContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to uitodo</h1>
          <Button type="primary" onClick={db.createList}>Create To-Do List</Button>
        </div>
        <Wave color="#fff" />
      </main>
    </div>
  )
}
