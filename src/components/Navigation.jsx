import React from "react";
import {Link} from "react-router-dom";
import Logo from "../images/uhost-icon.png";
import MobileButton from "./mobile-button/MobileButton.jsx";
import styles from "./Navigation.module.css";

const Navigation = ({onDispatch}) => {

  return (
    <header className={styles["main-header"]}>
      <div>
        <MobileButton onDispatch={onDispatch}/>
        <a href="/" className={styles["main-header__brands"]}><img src={Logo} alt="Uhost Icon"/></a>
      </div> 
      <nav className={styles["main-nav"]}>
        <ul className={styles["main-nav__items"]}>
          <li className={styles["main-nav__item"]}>
            <Link to="/packages">Packages</Link>
          </li>
          <li className={styles["main-nav__item"]}>
            <Link to="/customers">Customers</Link>
          </li>
          <li className={`${styles["main-nav__item"]} ${styles["main-nav__item--cta"]}`}>
            <Link>Start Hosting</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;