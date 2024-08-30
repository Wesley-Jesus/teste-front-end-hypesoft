import styles from "./MyWorks.module.css";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const MyWorks = () => {
  return (
    <>
      <h2 className={styles.title}>My Selected Work</h2>
      <div className={styles.box}>
        <div className={styles.cardService}>
          <div className={styles.iconCard}>
            <Image
              src="puclic/next.svg"
              
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={500}
              height={800}
              priority
            />
          </div>
          <div className={styles.textCard}></div>
          <IoIosArrowRoundForward className={styles.arrowCard} />
        </div>
      </div>
    </>
  );
};
export default MyWorks;
