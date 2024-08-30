import styles from "./About.module.css";

const Abaout = () => (
  <>
    <span className={styles.containerAbout}>
      <h1>
        Hello, I'm John, a <br />{" "}
        <h1 className={styles.pourpleTitle}>
          Software Engineer.
        </h1>
      </h1>
      <div className={styles.textIntroducton}>
        Product Designer, UI/UX Designer, and developer based in Brazil. Over{" "}
        <br /> the past 17 years, as an art director and designer, I’ve worked
        with big <br /> companies and up-and-coming startups.
      </div>
    </span>
    <div className={styles.teste}></div>
  </>
);
export default Abaout;
