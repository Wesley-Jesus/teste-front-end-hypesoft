import styles from "./NavBar.module.css";
import Image from "next/image";

const NavBar = () => (
  <>
  <nav className={styles.nav}>
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
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={500}
      height={800}
      priority
    />
    </>
);
export default NavBar;
