import Abaout from "./Components/About/About";
import Myservice from "./Components/Mysevice";
import NavBar from "./Components/navBar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Abaout />
      <Myservice />
    </main>
  );
}