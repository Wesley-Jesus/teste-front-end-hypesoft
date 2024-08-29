import styles from "./NavBar.module.css";

const NavBar = () => (
    <nav className={`${styles.nav} container`}>
      <ul className={styles.lisNav}>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#service">SERVICE</a>
        </li>
        <li>
          <a href="#works">WORKS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
);
export default NavBar;
