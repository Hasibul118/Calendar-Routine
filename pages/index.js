import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Routine Calender</title>
        <meta name="description" content="New way of manage your daily routine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Routine Calender
        </h1>
      </main>

    </div>
  )
}
