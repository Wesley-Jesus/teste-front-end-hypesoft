import styles from "./Contact.module.css";
const Contact = () => (
  <div className={styles.box}>
    
    <div className={styles.cardContact}>
    <div>Let me know here.</div>
    <form>
        <input className={styles.input}  type="text" />
    </form>
    </div>
  </div>
);

export default Contact;
