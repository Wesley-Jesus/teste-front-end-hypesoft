import styles from "./Myservice.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { moockCardsService } from "./utils";

const Myservice = () => {
  return (
    <>
      <h2 className={styles.title}>My service</h2>
      <div className={styles.box}>
      {moockCardsService.map((item) => (
          <div className={styles.cardService}>
            <div className={styles.iconCard}> {item.icon}</div>
            <div className={styles.textCard}>{item.title}</div>
            <IoIosArrowRoundForward className={styles.arrowCard} />
          </div>
      ))}
      </div>
    </>
  );
};
export default Myservice;
