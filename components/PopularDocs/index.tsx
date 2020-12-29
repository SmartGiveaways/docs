import Link from "next/link";

import styles from "./styles.module.css";

const PopularDocs = ({}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Popular Documents</h2>
      <div className={styles.docs}>
        <Link href="document/creating-a-giveaway"><a>Creating a giveaway</a></Link>
        <Link href="document/installing-the-bot"><a>Installing the bot</a></Link>
        <Link href="document/all-commands"><a>All commands</a></Link>
        <Link href="document/how-to-use-presets"><a>How to use presets</a></Link>
        <Link href="document/document-5"><a>Document 5</a></Link>
      </div>
    </div>
  );
}

export default PopularDocs;