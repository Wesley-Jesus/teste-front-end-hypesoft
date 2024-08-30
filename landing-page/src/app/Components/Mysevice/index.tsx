import styles from "./Myservice.module.css";
import { IoCubeOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { moockCardsService } from "./utils";

const Myservice = () => {
  return (
    <>
      <h2 className={styles.title}>My service</h2>
      <div className={styles.s}>
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
