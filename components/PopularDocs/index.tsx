import Link from "next/link";

import styles from "./styles.module.css";

const PopularDocs = ({}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular Documents</h2>
      <div className={styles.docs}>
        <Link href="document/discord-bot/creating-a-giveaway"><a>Creating a giveaway</a></Link>
        <Link href=""><a>Installing the bot</a></Link>
        <Link href=""><a>All commands</a></Link>
        <Link href=""><a>How to use presets</a></Link>
        <Link href=""><a>Document 5</a></Link>
      </div>
    </div>
  );
}

export default PopularDocs;