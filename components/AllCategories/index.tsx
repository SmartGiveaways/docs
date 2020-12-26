import styles from "./styles.module.css";

const AllCategories = ({}) => {
  return (
    <div className={styles.wrapper}>
      <h2>All Categories</h2>
      <div className={styles.card}>
        <h3>Discord Bot</h3>
        <p>Documentation on how to use the bot on Discord. <br /> Commands, presets, languages, etc... </p>
      </div>
      <div className={styles.card}>
        <h3>Self-Hosting</h3>
        <p>Documentation on how to setup your own instance <br /> of your bot and creating your bot profile</p>
      </div>
      <div className={styles.card}>
        <h3>GitHub</h3>
        <p>Documentation on how to report issues, make <br /> suggestions, make pull requests, etc... on GitHub</p>
      </div>
    </div>
  );
}

export default AllCategories;