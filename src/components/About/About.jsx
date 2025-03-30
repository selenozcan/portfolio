import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <i class="fa-solid fa-arrow-right"></i>
            <div className={styles.aboutItemText}>
              <h3>Curious Mind in Tech</h3>
              <p>
                I’ve worked on fullstack development together with backend
                systems, automation, and embedded development. Lately, I’ve been
                focusing more on frontend technologies like React and React
                Native, continuing to grow my skill set.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i class="fa-solid fa-desktop"></i>
            <div className={styles.aboutItemText}>
              <h3>Frontend Journey</h3>
              <p>
                I build mobile and web interfaces using React and React Native,
                focusing on clean code, responsive design and smooth user
                experiences. My recent work includes interactive apps that
                combine functionality with simple, user-friendly layouts.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <i class="fa-solid fa-database"></i>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I also have experience developing scalable APIs and fast,
                reliable back-end systems, often integrating with automation
                tools or hardware-level processes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
