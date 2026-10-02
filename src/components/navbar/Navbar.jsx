import Link from "next/link";

import styles from "./Navbar.module.css";

const Navbar = ({ list, title = "My Store" }) => {
  return (
    <nav className={styles.header}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.navbarLogo}>
          <span>{title}</span>
        </Link>
        <div className={styles.navbarMenu}>
          {list.map((item, index) => (
            <div className={styles.navbarItem} key={index}>
              <Link href="#">{item}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
