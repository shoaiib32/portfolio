import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SHOAIB</h1>
        <p className={styles.description}>
        I'm a frontend developer with a passion for creating engaging and user-friendly interfaces. Feel free to connect if you'd like to know more about my work!
        </p>
        <a href="mailto:siddiqueshoaib38@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/boy.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
