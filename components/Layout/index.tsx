import Header from "../Header";

import styles from "./styles.module.css";

const Layout = ({children}) => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;