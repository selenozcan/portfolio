import React from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:ozcsel.16@gmail.com">ozcsel.16@gmail.com</a>
        </li>
        <li className={styles.link}>
          <i className="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/selenozcann">
            linkedin.com/in/selenozcann
          </a>
        </li>
        <li className={styles.link}>
          <i className="fa-brands fa-github"></i>
          <a href="https://www.github.com/selenozcan">github.com/selenozcan</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
