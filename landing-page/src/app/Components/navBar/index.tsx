import styles from "./NavBar.module.css";
import Image from "next/image";


const NavBar = () => (
  <nav className={styles.nav}>
    <Image
              src="public\images\about_image2.svg"
              alt="Vercel Logo"
              // className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
    <ul
    className={styles.lisNav}>
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
