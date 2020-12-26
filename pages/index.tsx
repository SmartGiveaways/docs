import Head from 'next/head'
import AllCategories from "../components/AllCategories";

import styles from "../styles/index.module.css";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Smart Giveaways | Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h1>Welcome! <span style={{fontWeight: "normal"}}>How can we help?</span></h1>
        <AllCategories />
      </div>
    </div>
  )
}
