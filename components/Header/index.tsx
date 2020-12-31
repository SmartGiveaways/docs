import ThemeToggle from "../ThemeToggle";
import Link from "next/link";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.left}>
        <Link href="/support"><a>Support</a></Link>
        <Link href="/"><a>Docs</a></Link>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default Header;