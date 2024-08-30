import Abaout from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Myservice from "./Components/Mysevice";
import MyWorks from "./Components/MyWorks/Myworks";

import NavBar from "./Components/navBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Abaout />
      <Myservice />
      <MyWorks />
      <Contact />
    </main>
  );
}