import React from "react";
import {Link} from "react-router-dom";
import Logo from "../images/uhost-icon.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles["main-header"]}>
      <div>
        <Link className={styles["main-header__brands"]} to="/"><img src={Logo} alt="Uhost Icon"/></Link>
      </div> 
      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav__items"]}>
          <li className={styles["main-nav__item"]}>
            <a><Link to="/packages">Packages</Link></a>
          </li>
          <li className={styles["main-nav__item"]}>
            <a><Link to="/customers">Customers</Link></a>
          </li>
          <li className={`${styles["main-nav__item"]} ${styles["main-nav__item--cta"]}`}>
            <a>Start Hosting</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;