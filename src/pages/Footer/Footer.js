import React from "react";

//CSS
import styles from "./Footer.module.scss";

//React Icons
import { GoHeart } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";

//React Reveal
import Flip from "react-reveal/Flip";

export default function Footer() {
  return (
    <Flip bottom>
      <footer className={styles.container}>
        <p className={styles.text1}>
          We <GoHeart className={styles.iconHeart} /> Sungai Buloh
        </p>

        <p className={styles.text2}>
          Here is our Instragram Account{" "}
          <a href="https://www.instagram.com/welcome.to.sungai_buloh/">
            <GrInstagram className={styles.socialMedia} />
          </a>
        </p>
        <p className={styles.text3}>© 2023 JASMINE ANGELIQUE LIDY MICHEL</p>
      </footer>
    </Flip>
  );
}
