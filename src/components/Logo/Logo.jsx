import React from "react";
import styles from "./Logo.module.css";
import logoImage from '../../assets/images/logoRMFull.svg'

const Logo = ({filterOn}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className={`mx-auto ${styles.navbarsize}`}>
        <a href={filterOn?"/":"#"} className="navbar-brand">
          <img
            className={`img-fluid ${styles.imgsize}`}
            src={logoImage}
            alt="Rick & Morty"
          />
        </a>
      </div>
    </nav>
  );
};

export default React.memo(Logo);
