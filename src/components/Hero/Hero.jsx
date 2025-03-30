import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Selen</h1>
        <p className={styles.description}>
          A software engineer with experience in full-stack development,
          embedded systems and backend solutions, now focused on frontend
          development with React and React Native.
        </p>
        <a href="mailto:myemail@email.com" className={styles.downloadBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
