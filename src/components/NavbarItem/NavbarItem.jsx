/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";
import styles from "./NavbarItem.module.sass";
//import { AppContext } from "../../context/AppContext";

export const NavbarItem = ({ title, setIsActiveButton }) => {
  const [isAcc, setIsAcc] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onClick = (title) => {
    isAcc ? setIsAcc(false) : setIsAcc(true);
    isActive ? setIsActive(false) : setIsActive(true);
    setIsActiveButton(title);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={
          isActive ? `${styles.button_active} ${styles.button}` : styles.button
        }
        onClick={() => onClick(title)}
      >
        <div className={styles.block}>
          {title}
          {isAcc ? (
            <img
              src="/img/arrow-right.svg"
              alt="arrow right"
              className={`${styles.arrow} ${styles.arrow_active}`}
            />
          ) : (
            <img
              src="/img/arrow-black.svg"
              alt="arrow down"
              className={`${styles.arrow}`}
            />
          )}
        </div>
        {isAcc && <p className={styles.text}></p>}
      </button>
    </div>
  );
};